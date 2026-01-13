import { useEffect, useState, useMemo } from 'react'
import Console from '../../components/Console/Console'
import { useAuth } from '../../context/AutContext/useAuth'
import type { projectServerInterface } from '../../Interfaces/projectInterfaces'
import './DashboardPage.css'
import type { endpointServerInterface } from '../../Interfaces/endpointsInterfaces'
import MoreUsedProyects from './components/MoreUsedProyects'
import Stats from './components/Stats'
import ListComponent from './components/ListEndpointsComponent'

export default function DashboardPage() {
  const { withToken } = useAuth()
  const BASE_URL = import.meta.env.VITE_BASE_URL

  const [projects, setProjects] = useState<projectServerInterface[]>([])
  const [endpoints, setEndpoints] = useState<Record<string, endpointServerInterface[]>>({})
  const [loading, setLoading] = useState(true)

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
      setLoading(true)

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
      
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProjectsToBack()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalRequest = useMemo(() => {
    return projects.reduce((acum, project) => acum + project.request_count, 0)
  }, [projects])




  return (
    <>
      <section className='flex flex-col gap-4'>
        <Stats 
          flatEndpointsList={flatEndpointsList}
          projects={projects}
          totalRequest={totalRequest}
        />

        <section className='flex gap-8 px-8 items-center'>
          <Console />
          <MoreUsedProyects 
            loading={loading}
            projects={projects}
            totalRequest={totalRequest}
          />
        </section>

        <ListComponent
          listToRender={flatEndpointsList}
        />
      </section>
    </>
  )
}