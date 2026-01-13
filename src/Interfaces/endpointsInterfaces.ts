export interface endpointServerInterface {
  _id: string
  name: string
  description?: string
  method: string
  path_url: string
  response?: string | object
  status_code: number
  delay?: number
}

export interface flatEndpoint {
  projectName: string
  projectId: string
  _id: string
  name: string
  description?: string | undefined
  method: string
  path_url: string
  response?: string | object | undefined
  status_code: number
  delay?: number | undefined
}