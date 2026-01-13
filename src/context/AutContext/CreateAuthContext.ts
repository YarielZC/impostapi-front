import { createContext } from "react";
import type { userDataInterface, userDataServerInterface } from '../../Interfaces/userDataInterface';

export interface IAuthContext {
  user: userDataInterface | null
  isAuthenticated: boolean
  loading: boolean
  ignorateRedirections: boolean
  setIgnorateRedirections: React.Dispatch<React.SetStateAction<boolean>>
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  registerLogin: (userData: userDataServerInterface, token: string, refreshToken: string) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  withToken: <T = any>(url: string, options?: RequestInit) => Promise<T>
}

export const AuthContext = createContext<IAuthContext | null>(null)