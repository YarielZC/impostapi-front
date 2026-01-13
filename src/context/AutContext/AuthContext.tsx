import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./CreateAuthContext";
import { useNavigate } from 'react-router';
import type { userDataInterface, userDataServerInterface } from '../../Interfaces/userDataInterface';
import type { LoginInfoRetorned } from '../../Interfaces/apiInterfaces';


export default function AuthProvider({ children }: {children: ReactNode}) {
  const BASE_URL = import.meta.env.VITE_BASE_URL

  const navigate = useNavigate()
  
  const [user, setUser] = useState<userDataInterface | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [ignorateRedirections, setIgnorateRedirections] = useState(false)


  const registerLogin = (userData: userDataServerInterface, token: string, refreshToken: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {logs, ...data} = userData
    
    setUser(data)
    setIsAuthenticated(true)
    setToken(token)
    setRefreshToken(refreshToken)

    localStorage.setItem('user_data', JSON.stringify(data))
    localStorage.setItem('token', token)
    localStorage.setItem('refresh_token', refreshToken)
  }

  const login = async (username: string, password: string) => {
    
    const formulary = new FormData()
    formulary.append('username', username)
    formulary.append('password', password)
    
    try {
      const response = await fetch(`${BASE_URL}/auth/login/`, {
        method: 'POST',
        body: formulary
      })
      
      const data: LoginInfoRetorned = await response.json()
      if (response.ok) {
        registerLogin(data.user, data.access_token, data.refresh_token)
        navigate('/dashboard')
        return true
      }
      return false

    } catch (error) {
      console.error(`Error en cliente: ${error}`)
      return false
    }
  }

  const checkAndgetNewToken = async (status: number) => {
      
    if (status == 401){
      const responseRefresh = await fetch(`${BASE_URL}/auth/refresh_auth/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${refreshToken}`,
          'Content-Type': 'application/json'
        } 
      })
      if (!responseRefresh.ok) {
        return {status: false, newToken: undefined}
      }
      const data: LoginInfoRetorned = await responseRefresh.json()
      registerLogin(data.user, data.access_token, data.refresh_token)
      return {status: true, newToken: data.access_token}
    }
    return {status: false, newToken: undefined}
  }

  const get_token = () => {
    return token
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const withToken = async ( callback:  (data: any) => void, url: string, method: string, contentType: string, body?: BodyInit | null | undefined) => {
    let response = await fetch(url, {
      method: method,
      headers: {
        'Authorization': `Bearer ${get_token()}`,
        'Content-Type': contentType,
      },
      body: body
    })

    if (!response.ok) {
      const check = await checkAndgetNewToken(response.status)
      if (!check.status) {
        throw new Error(`Error en la peticion: ${response.status}`)
      } else {
        response = await fetch(url, {
          method: method,
          headers: {
            'Authorization': `Bearer ${check.newToken}`,
            'Content-Type': contentType,
          },
          body: body
        })
        if (!response.ok) {
          throw new Error(`Error en la peticion: ${response.status}`)
        }
        const data = await response.json()
        callback(data)
        return
      }
    }
    if (response.ok) {
      const data = await response.json()
      callback(data)
    }
    return
  }


  const logout = () => {
    setUser(null)
    setToken('')
    setRefreshToken('')
    setIsAuthenticated(false)

    localStorage.removeItem('token')
    localStorage.removeItem('user_data')
    localStorage.removeItem('refresh_token')
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedRefreshToken = localStorage.getItem('refresh_token')
    const storedUser = localStorage.getItem('user_data')

    if (storedRefreshToken && storedToken && storedUser) {
      try {
        // Intentamos convertir el string a objeto
        const parsedUser = JSON.parse(storedUser)
        
        setUser(parsedUser)
        setToken(storedToken)
        setRefreshToken(storedRefreshToken)
        setIsAuthenticated(true)
      } catch (error) {
        console.error("Error al leer datos del localStorage, borrando datos corruptos...", error)
        // Si falla el JSON.parse, borramos todo para evitar el bucle de errores
        localStorage.removeItem('token')
        localStorage.removeItem('user_data')
        localStorage.removeItem('refresh_token')
        setUser(null)
        setIsAuthenticated(false)
      }
    }

    setLoading(false)
  }, [])


  return (
    <AuthContext.Provider value={{user, isAuthenticated, token, refreshToken, setIgnorateRedirections, ignorateRedirections, withToken, registerLogin, login, logout, loading, checkAndgetNewToken, get_token}}>
      {!loading && children}
    </AuthContext.Provider>
  )

 
}