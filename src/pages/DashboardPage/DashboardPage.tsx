import Console from '../../components/Console/Console'
import StatsCard from '../../components/StatsCard/StatsCard'
import './DashboardPage.css'
export default function DashboardPage() {
  return (<>
    <section>
      <section className='w-4/5 mx-auto grid grid-cols-3 p-10 gap-6'>
        <StatsCard amount={1289}>
          Consultas totales
        </StatsCard>
        <StatsCard amount={24}>
          Endpoints Activos
        </StatsCard>
        <StatsCard amount={16}>
          Proyectos Totales
        </StatsCard>
      </section>

      <section className='flex gap-8 px-8'>
        <Console />
        
        <section className='h-72 flex-1 flex bg-red-500 w-full'>
          <h1>Candela</h1>
        </section>
      </section>
  

    </section>
    

  </>)
}