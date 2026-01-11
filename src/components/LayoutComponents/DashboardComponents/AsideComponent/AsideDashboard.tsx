import { IconBook, IconDoorExit, IconFolder, IconLayoutBoard, IconSettings } from '@tabler/icons-react'
import ButtonPanel from '../../../ButtonPanel/ButtonPanel'
import Href from '../../../Href/Href'
import './AsideDashboard.css'
import * as LogoWebp from '../../../../assets/Logo.webp'
import * as PhotoUser from '../../../../assets/PhotoIcons/PhotoUser.webp'
import { useAuth } from '../../../../context/AutContext/useAuth'
import { useNavigate } from 'react-router'

export default function AsideDashboard() {

  const { user, logout, setIgnorateRedirections } = useAuth()
  const navigate = useNavigate()
  
  return (
    <aside className='flex flex-col justify-between w-80 h-[100vh] fixed border-r-2 border-r-[var(--dark-mode-border-color)] '>
      <div>
        <div className='py-4 border-b-2 border-b-[var(--dark-mode-border-color)] h-20 flex items-end px-4'>
          <Href to='/' className='flex items-center justify-center gap-4 max-sm:gap-2'>
            <img className='w-10 max-sm:w-7' src={LogoWebp.default} alt='Logotipo de ImpostAPI' />
            <h1 className='font-bold text-[1.35rem] max-sm:text-xl'>ImpostAPI</h1>
          </Href>
        </div>

        <nav className='h-full py-8 px-4'>
          <ButtonPanel
            icon={<IconLayoutBoard />}
            to='/dashboard'
          >
            Dashboard
          </ButtonPanel>
          <ButtonPanel
            icon={<IconFolder />}
            to='/dashboard/projects'
          >
            Mis proyectos
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
            Cerrar sesión
          </button>
        </nav>
      </div>
      <div className='w-[87%] mx-auto'>
        <hr className=' border-t-2 border-t-[var(--dark-mode-border-color)] mb-0.5'/>
        <footer className='flex items-center gap-4 overflow-hidden py-4 px-2'>
          <img onClick={() => {return}} className='w-8 max-sm:w-7' src={PhotoUser.default} alt='Imagen generica de usuario' />
          <div className=''>
            <p className='text-sm w-4 text-white'>{user?.email}</p>
            <p className='text-sm text-[var(--secondary-text-color)]'>Plan Hobby</p>
          </div>
        </footer>
      </div>
    </aside>
  )
}