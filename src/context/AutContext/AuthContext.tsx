import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./CreateAuthContext";
import { useNavigate } from 'react-router';
import type { userDataInterface } from '../../Interfaces/userDataInterface';


export default function AuthProvider({ children }: {children: ReactNode}) {
  const BASE_URL = import.meta.env.VITE_BASE_URL

  const navigate = useNavigate()
  
  const [user, setUser] = useState<userDataInterface | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')

  const registerLogin = (userData: userDataInterface, token: string, refreshToken: string) => {
    setUser(userData)
    setIsAuthenticated(true)
    setToken(token)
    setRefreshToken(refreshToken)

    localStorage.setItem('user_data', JSON.stringify(userData))
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
      
      const data: {access_token: string, refresh_token: string, user: userDataInterface} = await response.json()
      if (response.ok) {
        registerLogin(data.user, data.access_token, data.refresh_token)
        navigate('/')
        return true
      }
      return false

    } catch (error) {
      console.error(`Error en cliente: ${error}`)
      return false
    }
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
    <AuthContext.Provider value={{user, isAuthenticated, token, refreshToken, registerLogin, login, logout, loading}}>
      {!loading && children}
    </AuthContext.Provider>
  )

 
}