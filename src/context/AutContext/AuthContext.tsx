import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./CreateAuthContext";

interface IuserData {
  name: string
  username: string
  email?: string
}

export default function AuthProvider({ children }: {children: ReactNode}) {
  const [user, setUser] = useState<IuserData | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')

  const login = (userData: IuserData, token: string, refreshToken: string) => {
    setUser(userData)
    setIsAuthenticated(true)
    setToken(token)
    setRefreshToken(refreshToken)

    localStorage.setItem('user_data', JSON.stringify(userData))
    localStorage.setItem('token', token)
    localStorage.setItem('refresh_token', refreshToken)
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
    <AuthContext.Provider value={{user, isAuthenticated, token, refreshToken, login, logout, loading}}>
      {!loading && children}
    </AuthContext.Provider>
  )

 
}