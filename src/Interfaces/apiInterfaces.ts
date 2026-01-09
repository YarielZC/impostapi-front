import type { userDataInterface } from './userDataInterface'

export interface LoginInfoRetorned {
  access_token: string
  refresh_token: string
  user: userDataInterface
}