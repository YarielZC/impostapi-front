import CicrcleAndLabel from '../CircleAndLabel/CicrcleAndLabel'
import Href from '../Href/Href'
import './Footer.css'
import * as LogoWebp from '../../assets/Logo.webp'
export default function Footer() {
  return (
    <footer className='border-t-4 border-t-[var(--dark-mode-border-color)]'>
      <div className='grid grid-cols-4 grid-rows-1 px-16 max-xl:px-6 max-lg:grid-rows-2 max-lg:grid-cols-2 max-lg:gap-12 py-12 max-lg:justify-center content-center max-sm:hidden'>
        <section className='flex flex-col gap-3.5 max-lg:items-center max-lg:mx-auto md'>
          <Href to='/' className='flex items-center justify-center w-fit gap-4'>
            <img className='w-10' src={LogoWebp.default} alt='Logotipo de ImpostAPI' />
            <h1 className='font-bold text-2xl'>ImpostAPI</h1>
          </Href>
          <p className='w-2/3 text-[var(--secondary-text-color)] ml-2 max-lg:text-center max-sm:w-full'>Mock APIs para desarrolladores. Construye mejor software, rápido y eficiente.</p>
        </section>

        <section className='flex flex-col gap-0.5 text-white max-lg:items-center max-lg:mx-auto'>
          <p className='font-bold mb-2'>Navegación</p>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>Home</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/dashboard'>Dashboard</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/login'>Iniciar sesión</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/register'>Regístrarse</Href>
        </section>
        <section className='flex flex-col gap-0.5 text-white max-lg:items-center max-lg:mx-auto'>
          <p className='font-bold mb-2'>Recursos</p>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>API de ImpostAPI</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>Documentación</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/login'>Término de uso</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>Condiciones de política</Href>
        </section>
        <section className='flex flex-col gap-0.5 text-white max-lg:items-center max-lg:mx-auto'>
          <p className='font-bold mb-2'>Contacto</p>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>Correo electrónico</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>Telegram</Href>
          <a className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline text-[var(--secondary-text-color)]' href='https://github.com/YarielZC'>Github</a>
        </section>
      </div>

      <section className='flex-col gap-3.5 hidden max-sm:flex items-center pt-16 pb-16 max-sm:w-full'>
        <Href to='/' className='flex items-center justify-center w-fit gap-4'>
          <img className='w-10' src={LogoWebp.default} alt='Logotipo de ImpostAPI' />
          <h1 className='font-bold text-2xl'>ImpostAPI</h1>
        </Href>
        <p className='w-2/3 text-[var(--secondary-text-color)] ml-2 max-lg:text-center max-sm:w-full px-4 max-sm:ml-0 max-sm:text-sm'>Mock APIs para desarrolladores. Construye mejor software, rápido y eficiente.</p>
      </section>
      <section className='hidden max-sm:flex flex-col gap-8 mb-12 max-sm:w-full'>
        <div className='text-[#b8b8b8] flex justify-between px-8'>
          <p className='font-bold'>Navegación</p>
          <div className='flex flex-col gap-1 w-1/2 items-start'>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/'>Home</Href>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/dashboard'>Dashboard</Href>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/login'>Iniciar sesión</Href>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/register'>Regístrarse</Href>
          </div>
        </div>
        <div className='text-[#b8b8b8] flex justify-between px-8'>
          <p className='font-bold'>Recursos</p>
          <div className='flex flex-col gap-1 w-1/2 items-start'>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/'>API de ImpostAPI</Href>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/'>Documentación</Href>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/login'>Término de uso</Href>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/'>Condiciones de política</Href>
          </div>
        </div>
        <div className='text-[#b8b8b8] flex justify-between px-8'>
          <p className='font-bold'>Contacto</p>
          <div className='flex flex-col gap-1 w-1/2 items-start'>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/'>Correo electrónico</Href>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/'>Telegram</Href>
            <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline max-sm:text-sm' to='/login'>Github</Href>
          </div>
        </div>
        
      </section>

      <div className='flex justify-between py-6 border-t-2 border-t-[var(--dark-mode-border-color)] w-[96%] mx-auto max-sm:flex-col max-sm:items-center max-sm:gap-4 max-sm:w-full'>
        <CicrcleAndLabel textClassName='max-sm:text-center text-[var(--secondary-text-color)] max-sm:text-sm' iconClassName='max-sm:hidden text-[var(--text-resalt-color)]'> 2026 ImpostAPI Inc. Todos los derechos reservados.</CicrcleAndLabel>
        <CicrcleAndLabel textClassName='text-[var(--secondary-text-color)]' iconClassName='text-[var(--text-resalt-color)]'> Desarrollado por <Href className='text-[var(--text-resalt-color)]' to="https://github.com/YarielZC">Yariel Zamora del Cueto</Href></CicrcleAndLabel>
      </div>
    </footer>
  )
}