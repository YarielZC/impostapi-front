import { useMemo } from 'react';
import ProgressStadisticBar from '../../../components/ProgressStadisticBar/ProgressStadisticBar';
import { cn } from '../../../lib/utils';
import { shortText } from '../../../logic/textTools';
import '../DashboardPage.css'
import type { projectServerInterface } from '../../../Interfaces/projectInterfaces';

export default function MoreUsedProyects({projects, totalRequest, loading}: {projects: projectServerInterface[], totalRequest: number, loading: boolean}) {
  
  const calculatePercent = (quantity: number) => {
    if (totalRequest === 0) return 0
    return Math.round((quantity * 100) / totalRequest)
  }
  
  const projectsForActivity = useMemo(() => {
    return [...projects]
      .sort((a, b) => b.request_count - a.request_count)
      .slice(0, 5)
  }, [projects])
  
  
  return (
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
  )
}