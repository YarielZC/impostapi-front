import CicrcleAndLabel from '../CircleAndLabel/CicrcleAndLabel'
import Href from '../Href/Href'
import './Footer.css'
import * as LogoWebp from '../../assets/Logo.webp'
export default function Footer() {
  return (
    <footer className='border-t-4 border-t-[var(--dark-mode-border-color)]'>
      <div className='grid grid-cols-4 grid-rows-1 px-16 py-12'>
        <section className='flex flex-col gap-3.5'>
          <Href to='/' className='flex items-center justify-center w-fit gap-4'>
            <img className='w-10' src={LogoWebp.default} alt='Logotipo de ImpostAPI' />
            <h1 className='font-bold text-2xl'>ImpostAPI</h1>
          </Href>
          <p className='w-2/3 text-[var(--secondary-text-color)] ml-2'>Mock APIs para desarrolladores. Construye mejor software, rápido y eficiente.</p>
        </section>

        <section className='flex flex-col gap-0.5 text-white'>
          <p className='font-bold mb-2'>Navegación</p>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>Home</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/dashboard'>Dashboard</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/login'>Iniciar sesión</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/register'>Regístrarse</Href>
        </section>
        <section className='flex flex-col gap-0.5 text-white'>
          <p className='font-bold mb-2'>Recursos</p>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>API de ImpostAPI</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>Documentación</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/login'>Término de uso</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>Condiciones de política</Href>
        </section>
        <section className='flex flex-col gap-0.5 text-white'>
          <p className='font-bold mb-2'>Contacto</p>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>Correo electrónico</Href>
          <Href className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline' to='/'>Telegram</Href>
          <a className='transition duration-200 hover:text-[var(--text-resalt-color)] hover:underline text-[var(--secondary-text-color)]' href='https://github.com/YarielZC'>Github</a>
        </section>
      </div>

      <div className='flex justify-between py-6 border-t-2 border-t-[var(--dark-mode-border-color)] w-[96%] mx-auto'>
        <CicrcleAndLabel textClassName='text-[var(--secondary-text-color)]' iconClassName='text-[var(--text-resalt-color)]'> 2026 ImpostAPI Inc. Todos los derechos reservadps.</CicrcleAndLabel>
        <CicrcleAndLabel textClassName='text-[var(--secondary-text-color)]' iconClassName='text-[var(--text-resalt-color)]'> Desarrollado por <a className='text-[var(--text-resalt-color)]' href="https//github.com/YarielZC">Yariel Zamora del Cueto</a></CicrcleAndLabel>
      </div>
    </footer>
  )
}