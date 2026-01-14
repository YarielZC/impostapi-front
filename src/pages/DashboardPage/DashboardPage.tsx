import Console from '../../components/Console/Console'
import './DashboardPage.css'
import MoreUsedProyects from './components/MoreUsedProyects'
import Stats from './components/Stats'
import { useAPIContext } from '../../context/APIContext/useAPIContext'
import { useMemo } from 'react'
import ListEndpointsComponent from '../../components/ListEndpointsComponent/ListEndpointsComponent'

export default function DashboardPage() {

  const { projects, flatEndpointsList} = useAPIContext()

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
            projects={projects}
            totalRequest={totalRequest}
          />
        </section>

        <ListEndpointsComponent
          listToRender={flatEndpointsList}
        />
      </section>
    </>
  )
}