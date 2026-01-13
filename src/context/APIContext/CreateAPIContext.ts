import { createContext } from "react";
import type { endpointServerInterface, flatEndpoint } from '../../Interfaces/endpointsInterfaces';
import type { projectServerInterface } from '../../Interfaces/projectInterfaces';
import type { logInterface } from '../../Interfaces/userDataInterface';

export interface IAPIContext {
  projects: projectServerInterface[]
  endpoints: Record<string, endpointServerInterface[]>
  flatEndpointsList: flatEndpoint[]
  loadLogs: () => Promise<void>
  logHistory: logInterface[]
}

export const APIContext = createContext<IAPIContext | null>(null)