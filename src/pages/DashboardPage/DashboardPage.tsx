import { useEffect, useState, useMemo } from 'react'
import Console from '../../components/Console/Console'
import StatsCard from '../../components/StatsCard/StatsCard'
import ProgressStadisticBar from '../../components/ProgressStadisticBar/ProgressStadisticBar'
import { useAuth } from '../../context/AutContext/useAuth'
import { cn } from '../../lib/utils'
import type { projectServerInterface } from '../../Interfaces/projectInterfaces'
import './DashboardPage.css'
import type { endpointServerInterface } from '../../Interfaces/endpointsInterfaces'
import { shortText } from '../../logic/textTools'
import ListComponent from '../../components/ListEndpointsComponent/ListEndpointsComponent'

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

  const projectsForActivity = useMemo(() => {
    return [...projects]
      .sort((a, b) => b.request_count - a.request_count)
      .slice(0, 5)
  }, [projects])
  
  const calculatePercent = (quantity: number) => {
    if (totalRequest === 0) return 0
    return Math.round((quantity * 100) / totalRequest)
  }

  return (
    <>
      <section className='flex flex-col gap-4'>
        <section className='w-4/5 mx-auto grid grid-cols-3 p-10 gap-6'>
          <StatsCard amount={totalRequest}>
            Consultas totales
          </StatsCard>
          <StatsCard amount={flatEndpointsList.length}> 
            Endpoints Activos
          </StatsCard>
          <StatsCard amount={projects.length}>
            Proyectos Totales
          </StatsCard>
        </section>

        <section className='flex gap-8 px-8 items-center'>
          <Console />
          
          <section className='relative flex-1 self-start flex w-full flex-col gap-3'>
            
            {(!loading && totalRequest === 0) && (
              <div className='flex justify-center items-center absolute top-14 w-full h-[calc(100%-8rem)] z-30'>
                <p className='text-white font-bold text-2xl'>AÚN NO TIENES ACTIVIDAD</p>
              </div>
            )}

            <div className='flex justify-between w-full h-10 items-center'>
              <h6 className='inline text-2xl'>Con más actividad</h6>
              <p className='text-[var(--secondary-text-color)]'>
                de un total de {projects.length} proyectos
              </p>
            </div>
            <hr className='border-[var(--secondary-text-color)] w-full'/>

            <div className={cn(
              'w-full flex flex-col items-center justify-center gap-4 transition-all duration-500',
              (totalRequest === 0 && !loading) && 'blur-sm select-none'
            )}>
              {loading ? (
                 <p className="text-gray-400 mt-4">Cargando estadísticas...</p>
              ) : (
                projectsForActivity.map((project, index) => (
                  <ProgressStadisticBar 
                    key={project._id || index}
                    title={shortText(project.name, 22)}
                    description={shortText(project.description, 55)}
                    percent={calculatePercent(project.request_count)}
                  />
                ))
              )}
            </div>
          </section>
        </section>

        <ListComponent
          listToRender={flatEndpointsList}
        />
      </section>
    </>
  )
}