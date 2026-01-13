import { useContext } from "react"
import {APIContext} from "./CreateAPIContext"

export const useAPIContext = () => {
  const context = useContext(APIContext)

  if (!context) {
    throw new Error("useAPIContext debe ser utilizado dentro de un AuthProvider")
  }
  
  return context
}