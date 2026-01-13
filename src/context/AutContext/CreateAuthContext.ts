import { createContext } from "react";
import type { userDataInterface, userDataServerInterface } from '../../Interfaces/userDataInterface';

interface IAuthContext {
  user: userDataInterface | null
  isAuthenticated: boolean
  token: string
  refreshToken: string
  registerLogin: (userData: userDataServerInterface, token: string, refreshToken: string) => void
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
  ignorateRedirections: boolean
  setIgnorateRedirections: React.Dispatch<React.SetStateAction<boolean>>
  get_token: () => string
  checkAndgetNewToken: (status: number) => Promise<{
        status: boolean;
        newToken: undefined;
    } | {
        status: boolean;
        newToken: string;
    }>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  withToken: (callback: (data: any) => void, url: string, method: string, contentType: string, body?: BodyInit | null | undefined) => Promise<void>
}

export const AuthContext = createContext<IAuthContext | null>(null)
