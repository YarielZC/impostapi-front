import { createContext } from "react";
import type { userDataInterface } from '../../Interfaces/userDataInterface';

interface IAuthContext {
  user: userDataInterface | null
  isAuthenticated: boolean
  token: string
  refreshToken: string
  registerLogin: (userData: userDataInterface, token: string, refreshToken: string) => void
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

export const AuthContext = createContext<IAuthContext | null>(null)
