import Card from '../../components/Card/Card'
import * as LogoWebp from '../../assets/Logo.webp'
import Input from '../../components/Input/Input'
import { IconUser, IconLock, IconArrowRight } from '@tabler/icons-react'
import Button from '../../components/Button/Button'
import { useForm } from 'react-hook-form'
import Href from '../../components/Href/Href'
import { useAuth } from '../../context/AutContext/useAuth'
import { useNavigate } from 'react-router'

interface formDataInterface {
  username: string
  password: string
}

export default function LoginPage() {

  const { login } = useAuth()
  const navigate = useNavigate()
  const {register, handleSubmit, formState: { errors }} = useForm<formDataInterface>()
  
  const asyncLogin = async (username: string, password: string) => {
    return login(username, password)
  }
  const onSubmit = async (input: formDataInterface) => {
    if (await asyncLogin(input.username, input.password)) {
      navigate('/dashboard')
    }
  }

  return (
    <section className='flex flex-col gap-8 h-[80vh] justify-center items-center max-sm:h-[100vh] max-sm:px-3 max-sm:w-full'>
      <Href to='/' className='flex flex-col gap-2 justify-center items-center'>
        <img className='w-14' src={LogoWebp.default} alt='Logotipo de ImpostAPI' />
        <h1 className='text-2xl font-bold'>ImpostAPI</h1>
      </Href>

      <Card>
        <h4 className='text-2xl font-bold text-white'>Bienvenido de vuelta</h4>
        <p className='text-[var(--secondary-text-color)]'>Inicia sesion para administrar tus mock API's.</p>
        <form className='flex flex-col justify-center items-center mt-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-3.5 max-sm:w-full'>
            <Input 
            type='text' 
            inputIcon={<IconUser/>} 
            label='Nombre de usuario o Email' 
            error={errors.username ? errors.username.message : ''}
            placeholder='dev@example.com'
            {
              ...register('username', {
                required: 'Este campo es obligatorio',
              })
            }
            />
            <Input 
            type='password' 
            inputIcon={<IconLock/>} 
            label='Contraseña'
            error={errors.password ? errors.password.message : ''}
            {
              ...register('password', {
                required: 'Este campo es obligatorio',
              })
            }
            placeholder='Tu contraseña'/>
          </div>

          <Button onClick={()=>{return}} className='flex mt-6 w-full justify-center' variant='submit'>Iniciar Sesion <IconArrowRight/> </Button>
        </form>
        <hr className='my-8 w-full border-2 border-[var(--dark-mode-border-color)]'/>
        <p className='text-[var(--secondary-text-color)] text-center'>¿No tienes una cuenta todavía? <Href className='text-[var(--text-resalt-color)] hover:text-[var(--button-color-hover)]' to='/register'>Regístrate</Href></p>
      </Card>
    </section>
  )
}