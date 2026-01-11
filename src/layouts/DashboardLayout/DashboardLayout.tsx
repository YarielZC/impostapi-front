import { Outlet } from 'react-router'
import './DashboardLayout.css'
import AsideDashboard from '../../components/LayoutComponents/DashboardComponents/AsideComponent/AsideDashboard'
import { HeaderDashboard } from '../../components/LayoutComponents/DashboardComponents/HeaderComponent/HeaderDashboard'

export default function DashboardLayout () {

  return (
    <section className='flex'>
      <AsideDashboard />

      <div className='ml-80 flex-4'>
        <main className='mt-20'>
        <HeaderDashboard />
          <Outlet/>
        </main>
      </div>
    </section>
  )
}