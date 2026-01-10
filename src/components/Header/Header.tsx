import Button from "../Button/Button";
import './Header.css'
import * as LogoWebp from '../../assets/Logo.webp'
import Href from "../Href/Href";
import * as PhotoUser from '../../assets/PhotoIcons/PhotoUser.webp'
import { useAuth } from '../../context/AutContext/useAuth';
import { IconMenu } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const {isAuthenticated, user, logout} = useAuth()
  const [showMenu, setShowMenu] = useState(false)
  const [showMenuDesactiver, setShowMenuDesactiver] = useState(false)

  useEffect(() => {
    if (!showMenu) {
      setTimeout(() => {
        setShowMenuDesactiver(showMenu)
      }, 600)
      return
    }
    setShowMenuDesactiver(showMenu)
  }, [showMenu])
  return (
    <>
    <header className='z-50 flex fixed w-full top-0 border-b-2 border-[var(--border-color)] bg-[var(--dark-mode-background-color)] items-center justify-between p-5 h-20 max-sm:h-16'>

      <Href to='/' className='flex items-center justify-center gap-4 max-sm:gap-2'>
        <img className='w-10 max-sm:w-7' src={LogoWebp.default} alt='Logotipo de ImpostAPI' />
        <h1 className='font-bold text-2xl max-sm:text-xl'>ImpostAPI</h1>
      </Href>

      <nav className='flex items-center justify-center gap-6 max-md:hidden'>
        <Href to={'/features'}>Documentación</Href>
        <Href to={'/docs'}>Contacto</Href>
        <Href to={'/pricing'}>Donar</Href>
      </nav>


    

      <div className='flex items-center justify-center gap-8 max-sm:gap-4 '>
        { isAuthenticated ?
        (<>
          
          <div onClick={() => setShowMenu(!showMenu)} className='flex flex-col'>
            <p className='text-md font-semibold text-white max-sm:text-xs'>{user?.username}</p>
            <p className='text-[var(--secondary-text-color)] text-sm text-right max-sm:text-xs'>Free Plan</p>
          </div>
          <img onClick={() => setShowMenu(!showMenu)} className='w-10 max-sm:w-7' src={PhotoUser.default} alt='Imagen generica de usuario' />

          

          <hr className='h-8 border border-[var(--border-color)]'/>
          <button type='button' onClick={() => setShowMenu(!showMenu)} className='text-white select-none cursor-pointer mr-4 max-sm:mr-0'><IconMenu className='-mx-2'/></button>
        </>)
        :
        (<>
          <Href className='text-sm' to={'/login'}>Login</Href>
          <Href to='/register'>
            <Button onClick={() => {return}} variant='primary'>Sign Up</Button>
          </Href>
          <hr className='h-8 border border-[var(--border-color)] hidden max-sm:inline'/>
          <button type='button' onClick={() => setShowMenu(!showMenu)} className='text-white select-none cursor-pointer hidden max-sm:inline'><IconMenu className='-mx-2'/></button>
        </>)}

      </div>
      
      

      
    <div 
      className='absolute z-10 bg-[#0008] h-[100vh] top-0 left-0 max-sm:mt-16 mt-20' 
      onClick={() => setShowMenu(false)}
      style={{
        width: `${showMenuDesactiver ? '100%': 0}`,
        opacity: `${showMenu ? '100' : '0'}`,
        transition: 'opacity 0.7s ease',
      }}
    />
    <aside 
      className={`flex flex-col items-center h-fit top-0 right-0 -mt-24 w-64 absolute bg-[var(--dark-mode-card-form-color)] rounded-b-2xl border-b-2 border-b-[var(--border-color)] border-l-2 border-l-[var(--border-color)] gap-4 py-8 z-20 max-sm:hidden translate-y-[11rem]`} 
      style={{
        transform: `translateX(${showMenu ? '0' : '100%'})`,
        opacity: `${showMenu ? '100' : '0'}`,
        transition: 'all 0.7s ease',
      }}
    >
        <Href className='cursor-pointer hover:text-[var(--text-resalt-color)] ' to={'/features'}>Dashoboard</Href>
        <Href className='cursor-pointer hover:text-[var(--text-resalt-color)] ' to={'/features'}>Opciones</Href>
        <button className=' hover:text-[var(--text-resalt-color)] cursor-pointer text-[var(--secondary-text-color)]' onClick={() => {
          logout()
          setShowMenu(false)
        }}>
          Cerrar sesión
        </button>
    </aside>

    <aside 
      className='hidden max-sm:flex flex-col items-center h-fit w-full top-0 bg-[var(--dark-mode-card-form-color)] right-0 z-20 text-white absolute border-b-2 border-b-[var(--border-color)] rounded-b-2xl gap-3.5 py-8' 
      style={{
      transform: `translateY(${showMenu ? '4rem' : '-100%'})`,
      opacity: `${showMenu ? '100' : '0'}`,
      transition: 'all 0.7s ease',
    }}>
      <Href className='text-sm cursor-pointer' to={'/features'}>Home</Href>
      <Href className='text-sm cursor-pointer' to={'/features'}>Dashboard</Href>
      <Href className='text-sm cursor-pointer' to={'/docs'}>Contacto</Href>
      <Href className='text-sm cursor-pointer' to={'/pricing'}>Donar</Href>
      {isAuthenticated && <button className='text-sm cursor-pointer text-[var(--secondary-text-color)]' onClick={() => {
        logout()
        setShowMenu(false)
      }}>
        Cerrar sesión
      </button>}
      <hr className='border w-full border-[var(--border-color)]'/>
      <p className='w-full text-sm text-center text-[var(--secondary-text-color)] italic'>ImpostAPI - Créala tú mismo</p>
    </aside>
    </header>
    </>
  )
}