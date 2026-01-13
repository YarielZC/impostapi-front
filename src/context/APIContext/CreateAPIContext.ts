import { createContext } from "react";
import type { endpointServerInterface, flatEndpoint } from '../../Interfaces/endpointsInterfaces';
import type { projectServerInterface } from '../../Interfaces/projectInterfaces';

export interface IAPIContext {
  projects: projectServerInterface[]
  endpoints: Record<string, endpointServerInterface[]>
  flatEndpointsList: flatEndpoint[]
}

export const APIContext = createContext<IAPIContext | null>(null)