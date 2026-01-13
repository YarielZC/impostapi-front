import type { userDataServerInterface } from './userDataInterface'


export interface LoginInfoRetorned {
  access_token: string
  refresh_token: string
  user: userDataServerInterface
}

