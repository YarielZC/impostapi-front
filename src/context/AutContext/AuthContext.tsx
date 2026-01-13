import { useEffect, useState, useCallback, useRef } from "react";
import { AuthContext } from "./CreateAuthContext";
import { useNavigate } from 'react-router';
import type { userDataInterface, userDataServerInterface } from '../../Interfaces/userDataInterface';
import type { LoginInfoRetorned } from '../../Interfaces/apiInterfaces';

export default function AuthProvider({ children }: {children: React.ReactNode}) {
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate()
  
  const [user, setUser] = useState<userDataInterface | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [ignorateRedirections, setIgnorateRedirections] = useState(false)

  const isRefreshing = useRef(false)
  const requestQueue = useRef<((token: string) => void)[]>([])

  const logout = useCallback(() => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('token')
    localStorage.removeItem('user_data')
    localStorage.removeItem('refresh_token')
    navigate('/login') 
  }, [navigate])

  const registerLogin = (userData: userDataServerInterface, token: string, refreshToken: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {logs, ...data} = userData
    setUser(data)
    setIsAuthenticated(true)
    localStorage.setItem('user_data', JSON.stringify(data))
    localStorage.setItem('token', token)
    localStorage.setItem('refresh_token', refreshToken)
  }

  const login = async (username: string, password: string): Promise<boolean> => {
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

  const processQueue = (token: string | null, error: Error | null = null) => {
    requestQueue.current.forEach((resolve) => {
      if (!error && token) {
        resolve(token)
      }
    })
    requestQueue.current = []
  }

  const refreshAuthToken = async (): Promise<string | null> => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) return null;

    try {
      const response = await fetch(`${BASE_URL}/auth/refresh_auth/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${refreshToken}`,
          'Content-Type': 'application/json'
        } 
      })

      if (!response.ok) throw new Error('Refresh failed');

      const data: LoginInfoRetorned = await response.json()
      registerLogin(data.user, data.access_token, data.refresh_token)
      return data.access_token
    } catch {
      logout();
      return null;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const apiCall = async <T = any>(url: string, options: RequestInit = {}): Promise<T> => {
    const token = localStorage.getItem('token');
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...(options.headers || {})
    }

    let response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
      
      if (isRefreshing.current) {
        return new Promise<string>((resolve) => {
          requestQueue.current.push(resolve)
        }).then((newToken) => {
          return apiCall(url, {
             ...options,
             headers: {
                 ...headers,
                 'Authorization': `Bearer ${newToken}`
             }
          });
        });
      }

      isRefreshing.current = true;
      const newToken = await refreshAuthToken();
      isRefreshing.current = false; // Liberamos el bloqueo

      if (newToken) {
        processQueue(newToken);
        
        const newHeaders = {
          ...headers,
          'Authorization': `Bearer ${newToken}`
        };
        response = await fetch(url, { ...options, headers: newHeaders });
      } else {
        processQueue(null, new Error('Session expired'));
        throw new Error('Session expired');
      }
    }

    if (!response.ok) {
        const errorBody = await response.text().catch(() => '');
        throw new Error(`Request failed: ${response.status} ${errorBody}`);
    }

    return response.json();
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user_data')

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
        setIsAuthenticated(true)
      } catch {
        logout()
      }
    }
    setLoading(false)
  }, [logout])

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      loading,
      ignorateRedirections,
      setIgnorateRedirections,
      login,
      logout,
      registerLogin,
      withToken: apiCall
    }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}