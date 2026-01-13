export interface logInterface {
  project_name: string
  endpoint_name: string
  url: string
  method: string
  delay?: number
  status_code: number
  response?: string | object
  timestamp: string
}

export interface userDataInterface {
  name: string
  username: string
  email: string
  project_shared: string
  created_at: string
}

export interface userDataServerInterface extends userDataInterface {
    logs: logInterface[]
  }
