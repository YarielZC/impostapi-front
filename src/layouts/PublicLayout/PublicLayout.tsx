import { Outlet } from 'react-router'
import Header from '../../components/Header/Header'
import './PublicLayout.css'

export default function PublicLayout() {
  return (
    <div className="public-layout-container">
      <Header />

      <main className='min-w-[80vh] px-5'>
        <Outlet />
      </main>
    </div>
  )
}