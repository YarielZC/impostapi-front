import { createContext } from "react";

interface IuserData {
  name: string
  username: string
  email?: string
}

interface IAuthContext {
  user: IuserData | null;
  isAuthenticated: boolean;
  token: string;
  refreshToken: string;
  login: (userData: IuserData, token: string, refreshToken: string) => void;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<IAuthContext | null>(null)
