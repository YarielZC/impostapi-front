import { Outlet, useNavigate } from 'react-router'
import './DashboardLayout.css'
import AsideDashboard from '../../components/LayoutComponents/DashboardComponents/AsideComponent/AsideDashboard'
import { HeaderDashboard } from '../../components/LayoutComponents/DashboardComponents/HeaderComponent/HeaderDashboard'
import { useAPIContext } from '../../context/APIContext/useAPIContext'
import ListEndpointsComponent from '../../components/ListEndpointsComponent/ListEndpointsComponent'
import type { flatEndpoint } from '../../Interfaces/endpointsInterfaces'
import { useEffect, useState } from 'react'
import { cleanUrl } from '../../logic/cleanUrl'
import { cn } from '../../lib/utils'
import ButtonPanel from '../../components/ButtonPanel/ButtonPanel'
import { useAuth } from '../../context/AutContext/useAuth'
import { IconBook, IconDoorExit, IconFolder, IconHome, IconLayoutBoard, IconSettings } from '@tabler/icons-react'
import * as PhotoUser from '../../assets/PhotoIcons/PhotoUser.webp'


export default function DashboardLayout () {
  const {flatEndpointsList} = useAPIContext()
  const [searched, setSearched] = useState<flatEndpoint[]>([])
  const [searching, setSearching] = useState<boolean>(false)

  const { user, logout, setIgnorateRedirections } = useAuth()
  const navigate = useNavigate()

  const [showingMenu, setShowingMenu] = useState(false)

  const onChangeHandle = (input: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = input.target.value.toLowerCase()
    let newSearched: flatEndpoint[] = []

    if (newValue == '') {
      setSearching(false)
      return
    }
    if (searching == false) setSearching(true)

    if (['get', 'post', 'put', 'patch', 'delete', 'settings'].includes(newValue)) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.method.toLowerCase().includes(newValue)) return value
      })
    }

    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.name.toLowerCase().includes(newValue)) {
          return value
        }
      })
    }
    
    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.projectName.toLowerCase().includes(newValue)) return value
      })
    }

    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (cleanUrl(value.path_url).toLowerCase().includes(newValue)) return value
      })
    } 

    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.description.toLowerCase().includes(newValue)) return value
      })
    }
    
    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.method.toLowerCase().includes(newValue)) return value
      })
    } 

    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.status_code.toString().toLowerCase().includes(newValue)) return value
      })
    } 

    setSearched(newSearched)
  } 

  const showMenu = () => {
    setShowingMenu(!showingMenu)
  }

  useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code == 'Escape') {
          event.preventDefault()
          setSearching(false)
        }
      }
  
      document.addEventListener('keydown', handleKeyDown)
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [])
  return (
    <section className='flex'>
      <div className='max-sm:hidden'>
        <AsideDashboard />
      </div>

      <div className='ml-80 flex-4 max-2xl:ml-60 max-lg:ml-[4.63rem] max-sm:ml-0'>
        <main className='relative mt-20'>
          <HeaderDashboard showingMenu={showingMenu} showMenu={showMenu} onChange={onChangeHandle}/>
          <div className={cn(searching && 'hidden', !searching && 'block')}>
            <Outlet />
          </div>
          
          <section className={cn('bg-[#000000]/45s w-full h-full', searching && 'block', !searching && 'hidden')}>
            <ListEndpointsComponent
              listToRender={searched}
            />
          </section>

          <aside className='fixed w-full h-[calc(100%+20rem)] pb-[10rem] bg-red-500s top-0 right-0 z-40 mt-20 bg-[var(--dark-dashboard-card-color)]' style={{
            transform: `translateX(${showingMenu ? '0' : '-100%'})`,
            transition: 'all 0.5s ease',

          }}>
            <nav className=' pb-2 pt-4 px-4 max-lg:px-2'>
          
              <ButtonPanel
                icon={<IconLayoutBoard />}
                to='/dashboard'
                onClick={() => setShowingMenu(false)}
              >
                Dashboard
              </ButtonPanel>
              <ButtonPanel
                icon={<IconFolder />}
                to='/dashboard/projects'
                onClick={() => setShowingMenu(false)}
              >
                Mis proyectos
              </ButtonPanel>
              <ButtonPanel
                icon={<IconHome />}
                to='/'
              >
                Página Principal
              </ButtonPanel>
              <ButtonPanel
                icon={<IconBook />}
                to='/docs'
              >
                Documentación
              </ButtonPanel>
              <ButtonPanel
                icon={<IconSettings />}
                to='/dashboard/settings'
                onClick={() => setShowingMenu(false)}
              >
                Opciones
              </ButtonPanel>
              
              <button
                type='button'
                onClick={() => {
                  setIgnorateRedirections(true)
                  navigate('/')
                  logout()
                }}
                className='cursor-pointer flex gap-2.5 py-3 px-4 rounded-lg w-full text-[var(--secondary-text-color)]'
              >
                <IconDoorExit />
                <span className='max-lg:hidden max-sm:inline'>Cerrar sesión</span>
              </button>
            </nav>
            <hr className='border w-10/12 mx-auto border-[var(--dark-border-dashboard)]'/>
            <footer className='flex w-11/12 items-center gap-4 overflow-hidden py-4 px-2 max-lg:mx-auto'>
              <img onClick={() => {return}} className='w-8 max-sm:w-7' src={PhotoUser.default} alt='Imagen generica de usuario' />
              <div className=''>
                <p className='text-sm w-4 text-white'>{user?.email}</p>
                <p className='text-sm text-[var(--secondary-text-color)]'>Plan Hobby</p>
              </div>
            </footer>
          </aside>
        </main>
      </div>
    </section>
  )
}