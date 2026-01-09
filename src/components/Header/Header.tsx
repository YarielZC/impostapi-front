import Button from "../Button/Button";
import './Header.css'
import * as LogoWebp from '../../assets/Logo.webp'
import Href from "../Href/Href";
import * as PhotoUser from '../../assets/PhotoIcons/PhotoUser.webp'
import { useAuth } from '../../context/AutContext/useAuth';

export default function Header() {
  const {isAuthenticated, user} = useAuth()

  return (
    <header className='flex fixed w-full top-0 border-b-2 border-[var(--border-color)] bg-[var(--dark-mode-background-color)] items-center justify-between p-5 h-20'>

      <Href to='/' className='flex items-center justify-center gap-4'>
        <img className='w-10' src={LogoWebp.default} alt='Logotipo de ImpostAPI' />
        <h1 className='font-bold text-2xl'>ImpostAPI</h1>
      </Href>

      <nav className='flex items-center justify-center gap-6'>
        <Href to={'/features'}>Dashboard</Href>
        <Href to={'/docs'}>Contacto</Href>
        <Href to={'/pricing'}>Donar</Href>
      </nav>


    

      <div className='flex items-center justify-center gap-8'>
        { isAuthenticated ?
        (<>
          <div className='flex flex-col'>
            <p className='text-md font-semibold text-white'>{user?.name}</p>
            <p className='text-[var(--secondary-text-color)] text-sm text-right'>Free Plan</p>
          </div>
          <img className='w-10' src={PhotoUser.default} alt='Imagen generica de usuario' />
        </>)
        :
        (<>
          <Href to={'/login'}>Login</Href>
          <Href to='/register'>
            <Button onClick={() => {return}} variant='primary'>Sign Up</Button>
          </Href>
        </>)}
      </div>
    </header>
  )
}