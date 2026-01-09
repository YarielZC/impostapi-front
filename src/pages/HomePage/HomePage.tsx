import { IconArrowRight, IconCircleCaretRightFilled } from '@tabler/icons-react'
import Button from '../../components/Button/Button'
import StyledLabel from '../../components/StyledLabel/StyledLabel'
import './HomePage.css'
import CodeExpampleJson from '../../components/CodeExpampleJson/CodeExpampleJson'

export default function HomePage() {

  return (
    <>
      <section className='flex pt-36 pb-40 mt-20 max-w-[1920px] mx-auto'>
        <section className='flex flex-col flex-1 gap-7 ml-20'>
          <StyledLabel className='text-[var(--text-resalt-color)] text-sm font-bold'>v1.0 está funcionando</StyledLabel>
          <h2 className='text-7xl font-bold'>Mock API en <br /><span className='text-[var(--text-resalt-color)]'>Segundos</span></h2>
          <p className='text-[var(--secondary-text-color)] w-1/2 hyphens-auto text-justify'>La API que no existe todavía. Construye, prueba, y envía más rápido con un enfoque basado en la experiecia del desarrollador. Cero configuración, endpoints instantáneos.</p>
          <div className='flex gap-3'>
            <Button className='flex gap-1.5' variant='primary'>Empieza a crear gratis <IconArrowRight /></Button>
            <Button className='flex gap-1.5' variant='secondary'><IconCircleCaretRightFilled/> ¿Cómo usarla?</Button>
          </div>
          <p className='text-[var(--secondary-text-color)] mt-2 italic'>Desarrollado por <a href='https://github.com/YarielZC' className='font-bold text-[var(--text-resalt-color)]'>Yariel Zamora del Cueto</a></p>
        </section>
        <section className='flex justify-center flex-1'>
          <CodeExpampleJson />          
        </section>
      </section>
      
    </>
  )
}