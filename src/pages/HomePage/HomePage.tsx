import { IconAffiliateFilled, IconAlertTriangleFilled, IconArrowRight, IconBrandGithubFilled, IconCircleCaretRightFilled, IconClockFilled, IconCodeCircleFilled, IconCoffee, IconPencil } from '@tabler/icons-react'
import Button from '../../components/Button/Button'
import StyledLabel from '../../components/StyledLabel/StyledLabel'
import './HomePage.css'
import CodeExpampleJson from '../../components/CodeExpampleJson/CodeExpampleJson'
import Href from '../../components/Href/Href'
import CardExplain from '../../components/CardExplain/CardExplain'
import { useNavigate } from 'react-router'
import { useAuth } from '../../context/AutContext/useAuth'
import { useEffect } from 'react'

export default function HomePage() {

  const navigate = useNavigate()
  const {isAuthenticated, ignorateRedirections, setIgnorateRedirections } = useAuth()

  const empiezaACrearIgualHandleClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard')
      return
    }
    navigate('/login')
  }

  useEffect(() => {
    if (ignorateRedirections) setIgnorateRedirections(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ignorateRedirections])

  return (
    <>
      <section className='flex pt-36 pb-40 mt-20 max-w-[1920px] h-[100vh] mx-auto max-sm:pt-16 max-sm:h-[75vh] max-sm:pb-2'>
        <section className='flex flex-col flex-1 gap-7 ml-20 max-lg:ml-40 max-sm:ml-0 max-sm:flex-none max-sm:w-full'>
          <StyledLabel colorIcon='#685bf8' colorText='#685bf8' iconClassName='w-8 max-sm:w-4' className='text-sm font-bold max-sm:text-xs max-sm:hidden' roundedType='full'>v1.0 está funcionando</StyledLabel>
          <h2 className='text-7xl font-bold w-fit max-sm:text-5xl max-sm:text-center max-sm:mx-auto'>Mock API en <br /><span className='text-[var(--text-resalt-color)]'>Segundos</span></h2>
          <p className='text-[var(--secondary-text-color)] w-1/2 hyphens-auto text-justify max-2xl:w-2/3 max-lg:w-8/12 max-sm:mx-auto max-sm:w-full max-sm:px-8 max-sm:text-center max-sm:text-sm'>La API que no existe todavía. Construye, prueba, y envía más rápido con un enfoque basado en la experiecia del desarrollador. Cero configuración, endpoints instantáneos.</p>
          <div className='flex gap-3 max-lg:gap-11 max-sm:gap-3 w-fit max-sm:mx-auto max-sm:mt-2'>
            <Button onClick={empiezaACrearIgualHandleClick} className='flex gap-1.5' variant='primary'>Empieza a crear gratis <IconArrowRight /></Button>
            <Button className='flex gap-1.5' variant='secondary'><IconCircleCaretRightFilled/> ¿Cómo usarla?</Button>
          </div>
          <p className='text-[var(--secondary-text-color)] max-sm:text-center mt-2 italic'>Desarrollado por <Href className='text-[var(--text-resalt-color)] font-bold max-sm:font-medium' to='https://github.com/YarielZC'>Yariel Zamora del Cueto</Href></p>
        </section>
        <section className='flex justify-center flex-1 max-lg:hidden'>
          <CodeExpampleJson />          
        </section>
      </section>

      <section className='flex flex-col justify-center items-center p-8 w-full bg-[var(--dark-mode-card-form-color)] border-y-2 border-y-[var(--dark-mode-border-color)] gap-4 max-sm:px-4'>
        <p className='text-[var(--secondary-text-color)] max-sm:text-xs'>ACELERA TU CICLO DE DESARROLLO EN:</p>
        <div className='flex flex-wrap items-center justify-center gap-14 max-sm:gap-5 font-bold text-lg'>
          <p className='max-sm:text-sm text-[var(--secondary-text-color)]'>DISEÑO</p>
          <p className='max-sm:text-sm text-[var(--secondary-text-color)]'>MOCKS</p>
          <p className='max-sm:text-sm text-[var(--secondary-text-color)]'>FRONTEND</p>
          <p className='max-sm:text-sm text-[var(--secondary-text-color)]'>TESTING</p>
          <p className='max-sm:text-sm text-[var(--secondary-text-color)]'>DEMOS</p>
        </div>
      </section>

      <section className='flex flex-col gap-4 py-32 px-44 max-2xl:px-32 max-xl:px-16 justify-center items-center w-full max-sm:px-1.5 max-sm:py-24 max-w-[1920px] mx-auto'>
        <h4 className='text-center font-bold text-4xl text-white'>¿Por qué ImpostAPI?</h4>
        <p className='w-1/3 max-2xl:w-4/5 text-center text-[var(--secondary-text-color)]'>Diseñado para velocidad, flexibilidad y felicidad del desarrollador. No sigas luchando con las demoras del equipo de backend.</p>

        <div className='grid grid-rows-2 grid-cols-3 max-lg:grid-cols-2 max-lg:grid-rows-3 gap-6 mt-16 px-12 max-xl:px-0 w-full max-sm:grid-rows-5 max-sm:grid-cols-1 max-sm:px-4 '>
          <CardExplain 
            icon={<IconClockFilled />}
            title='Simulación de Latencia'
            description='Prueba como tu aplicación trabaja en redes lentas con latencia ajustable.'
            className='max-sm:w-full'
          />
          <CardExplain 
            icon={<IconAffiliateFilled />}
            title='Trabajo colaborativo'
            description='Sincroniza tus definiciones de mock entre todos los miembros del poyecto. Nada de conflictos.'
            className='max-sm:w-full'
          />
          <CardExplain 
            icon={<IconAlertTriangleFilled />}
            title='Ingienería del caos'
            description='Crea endpoints que retornan código de estado personalizado para asegurarte que la UI maneja los errores correctamente.'
            className='max-sm:w-full'
          />
          <CardExplain 
            icon={<IconCodeCircleFilled />}
            title='API de código abierto'
            description='Utiliza nuestra API completamente gratuita y de código abierto.'
            className='max-sm:w-full'
          />
          <CardExplain 
            icon={<IconPencil />}
            title='Respuestas Personalizadas'
            description='Crea respuestas de Endpoints personalizadas: JSON, String, etcétera.'
            className='max-sm:w-full'
          />
          <CardExplain 
            icon={<IconCodeCircleFilled />}
            title='Dashboard de trabajo'
            description='Utiliza nuestro Dashboard profesional para administrar todos tus endpoints y proyectos.'
            className='max-sm:hidden'
          />
        </div>
      </section>

      <section className='flex flex-col gap-6 items-center justify-center border-t-2 border-[var(--dark-mode-border-color)] py-32 bg-[var(--dark-mode-card-form-color)] '>
        <div className='max-w-[1920px] mx-auto flex flex-col gap-6 items-center justify-cente'>
          <h4 className='text-4xl font-bold max-sm:text-3xl text-white'>¿Un café para el dev?</h4>
          <p className='w-1/2 max-lg:w-3/4 text-center text-[var(--secondary-text-color)] max-sm:w-full max-sm:px-6 max-sm:text-sm'>Este proyecto es completamente gratuito y no necesitas pagar absolutamente nada para utilizar sus funcionalidades. No obstante se agradece un montón cualquier donación que desee hacer a este proyecto y/o ayudarme a crecer como desarrollador. Muchas gracias por estar acá.</p>
          <div className='flex gap-7 justify-center items-center mt-6'>
            <a href='/'><Button type='button' className='flex gap-2 text-lg' variant='primary'><IconCoffee />Contactar para donar</Button></a>
            <a href='/'><Button type='button' className='flex gap-2 text-lg' variant='secondary'><IconBrandGithubFilled />Contribuir al repo</Button></a>
          </div>
        </div>
      </section>
      
    </>
  )
}