import { useEffect, useMemo, useState } from 'react';
import { APIContext } from './CreateAPIContext';
import type { projectServerInterface } from '../../Interfaces/projectInterfaces';
import type { endpointServerInterface } from '../../Interfaces/endpointsInterfaces';
import { useAuth } from '../AutContext/useAuth';
import type { logInterface } from '../../Interfaces/userDataInterface';

export default function APIProvider({ children }: {children: React.ReactNode}) {
  const BASE_URL = import.meta.env.VITE_BASE_URL

  const { withToken } = useAuth()

  const [projects, setProjects] = useState<projectServerInterface[]>([])
  const [logHistory, setLogHistory] = useState<logInterface[]>([])
  const [endpoints, setEndpoints] = useState<Record<string, endpointServerInterface[]>>({})

  const getAllEndpoints = async (projectList: projectServerInterface[]) => {
    try {
      const promises = projectList.map(async (project) => {
        const endpoints = await withToken<endpointServerInterface[]>(
          `${BASE_URL}/dashboard/project/endpoints/${project._id}`
        );
        return { projectId: project._id, endpoints };
      });

      const results = await Promise.all(promises);

      const endpointsMap: Record<string, endpointServerInterface[]> = {};
      
      results.forEach(item => {
        endpointsMap[item.projectId] = item.endpoints;
      });

      setEndpoints(endpointsMap);

    } catch (error) {
      console.error("Error obteniendo endpoints de los proyectos:", error);
    }
  }

  const getProjectsToBack = async () => {
    try {

      const data = await withToken<projectServerInterface[]>(
        `${BASE_URL}/dashboard/project/projects`,
        { method: 'GET' }
      )
      setProjects(data)

      if (data.length > 0) {
        await getAllEndpoints(data)
      }

    } catch (error) {
      console.error("Error cargando dashboard:", error)
      
    } 
  }

  const flatEndpointsList = useMemo(() => {
      
    const projectNamesMap: Record<string, string> = {};
    projects.forEach(p => {
      projectNamesMap[p._id] = p.name;
    });

    return Object.keys(endpoints).flatMap((projectId) => {
      
      const endpointsDelProyecto = endpoints[projectId];
      const nombreDelProyecto = projectNamesMap[projectId] || "Sin Proyecto";

      
      return endpointsDelProyecto.map(endpoint => ({
        ...endpoint, 
        projectName: nombreDelProyecto, 
        projectId: projectId            
      }));
      
    });

  }, [endpoints, projects]); 
  
  const loadLogs = async () => {
    try {
      const data = await withToken<logInterface[]>(
        `${BASE_URL}/dashboard/me/get_logs`, 
        { method: 'GET' } 
      )
      
      setLogHistory(data || [])
      
    } catch (error) {
      console.error("Error cargando logs:", error)
    }
  }

  useEffect(() => {
    getProjectsToBack()
    loadLogs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <APIContext.Provider value={{
        projects,
        endpoints,
        flatEndpointsList,
        loadLogs,
        logHistory
      }}>
        {children}
      </APIContext.Provider>
    )
}
