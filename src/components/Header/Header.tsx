import Button from "../Button/Button";
import './Header.css'
import * as LogoWebp from '../../assets/Logo.webp'
import Href from "../Href/Href";
import * as PhotoUser from '../../assets/PhotoIcons/PhotoUser.webp'
import { useAuth } from '../../context/AutContext/useAuth';

export default function Header() {
  const {isAuthenticated} = useAuth()

  return (
    <header className='flex w-full border-b-2 border-[var(--border-color)] items-center justify-between p-5 h-20'>

      <Href to='/' className='flex items-center justify-center gap-4'>
        <img className='w-10' src={LogoWebp.default} alt='Logotipo de ImpostAPI' />
        <h1 className='font-bold text-2xl'>ImpostAPI</h1>
      </Href>

      <nav className='flex items-center justify-center gap-6'>
        <Href to={'/features'}>Features</Href>
        <Href to={'/pricing'}>Pricing</Href>
        <Href to={'/docs'}>Docs</Href>
      </nav>


    

      <div className='flex items-center justify-center gap-8'>
        { isAuthenticated ?
        (<>
          <div className='flex flex-col'>
            <p className='text-md font-semibold text-white'>Username</p>
            <p className='text-[var(--secondary-text-color)] text-sm'>Free Plan</p>
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