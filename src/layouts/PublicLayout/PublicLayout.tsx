import { Outlet } from 'react-router'
import Header from '../../components/Header/Header'
import './PublicLayout.css'
import Footer from '../../components/Footer/Footer'

export default function PublicLayout() {
  return (
    <div className="public-layout-container">
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}