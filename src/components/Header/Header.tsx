import Button from "../Button/Button";
import './Header.css'
import * as LogoWebp from '../../assets/Logo.webp'
import Href from "../Href/Href";

export default function Header() {
  return (
    <header className='flex w-full border-b-2 border-[var(--border-color)] items-center justify-between p-5'>

      <div className='flex items-center justify-center gap-4'>
        <img className='w-10' src={LogoWebp.default} alt="" />
        <h1 className='font-bold text-2xl'>ImpostAPI</h1>
      </div>

      <nav className='flex items-center justify-center gap-6'>
        <Href to={'/features'}>Features</Href>
        <Href to={'/pricing'}>Pricing</Href>
        <Href to={'/docs'}>Docs</Href>
      </nav>

      <div className='flex items-center justify-center gap-8'>
        <Href to={'/login'}>Login</Href>
        <Button onClick={() => {return}} variant='primary'>Sign Up</Button>
      </div>
    </header>
  )
}