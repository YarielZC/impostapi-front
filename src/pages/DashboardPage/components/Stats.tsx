import StatsCard from '../../../components/StatsCard/StatsCard'
import type { flatEndpoint } from '../../../Interfaces/endpointsInterfaces'
import type { projectServerInterface } from '../../../Interfaces/projectInterfaces'
import '../DashboardPage.css'

export default function Stats({totalRequest, flatEndpointsList, projects}: {totalRequest: number, flatEndpointsList: flatEndpoint[], projects: projectServerInterface[]}) {
  return (
    <section className='w-4/5 mx-auto grid grid-cols-3 p-10 gap-6  max-[1370px]:w-full  max-[1370px]:px-16 max-md:w-full max-md:py-10 max-md:px-4 max-sm:gap-2'>
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
  )
}