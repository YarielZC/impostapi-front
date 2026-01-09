import { createContext } from "react";

interface IuserData {
  name: string
  username: string
  email?: string
}

interface IAuthContext {
  user: IuserData | null
  isAuthenticated: boolean
  token: string
  refreshToken: string
  registerLogin: (userData: IuserData, token: string, refreshToken: string) => void
  login: (userData: IuserData, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

export const AuthContext = createContext<IAuthContext | null>(null)
