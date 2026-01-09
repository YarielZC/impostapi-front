import Href from '../../components/Href/Href'
import './RegisterPage.css'
import * as LogoWebp from '../../assets/Logo.webp'
import Card from '../../components/Card/Card'
import Input from '../../components/Input/Input'
import { IconArrowRight, IconLock, IconMail, IconAt } from '@tabler/icons-react'
import Button from '../../components/Button/Button'
import { useForm } from 'react-hook-form'
import InputCheckBox from '../../components/InputChecbox/InputCheckbox'
import { useState } from 'react'
import { useAuth } from '../../context/AutContext/useAuth'
import { useNavigate } from 'react-router'

interface formDataInterface {
  name: string,
  username: string,
  email: string,
  password: string,
  confirmpassword: string
}

interface userDataInterface {
  name: string
  username: string
  email: string
}


export default function RegisterPage() {
  const BASE_URL = import.meta.env.VITE_BASE_URL

  const navigate = useNavigate()

  const { login } = useAuth()
  const {register, handleSubmit, formState: { errors }} = useForm<formDataInterface>()

  const [ customPassError, setCustomPassError] = useState('')
  const [ customUsernameError, setCustomUsernameError] = useState('')
  const [ customEmailError, setCustomEmailError] = useState('')
  const [ acceptTerms, setAcceptTerms ] = useState(false)

  const registerUser = async (formDataUser: formDataInterface) => {
    try {
      const response = await fetch(`${BASE_URL}/auth/register_user/`, {
        method: 'POST',
        headers: [['Content-Type', 'application/json']],
        body: JSON.stringify({
                'name': formDataUser.name,
                'username': formDataUser.username,
                'email': formDataUser.email,
                'password': formDataUser.password
              })
      })

      const data = await response.json()

      if (!response.ok) {
        if (typeof data.detail === 'string') {
          if (data.detail === 'That username already exists') {
            setCustomUsernameError('Este nombre de usuario ya está en uso')
          } else if (data.detail === 'That email has already a account') {
            setCustomEmailError('Este correo ya tiene asignado una cuenta')
          }
        }
        return
      }
      
      const dataUser: userDataInterface = data
      if (!login(dataUser, formDataUser.password)) {
        navigate('/login')
      }


    } catch (error) {
      console.error(`Error en cliente: ${error}`)
    }
  }

  const onSubmit = (input: formDataInterface) => {
    setCustomEmailError('')
    setCustomPassError('')
    setCustomUsernameError('')
    if (input.password != input.confirmpassword) {
      setCustomPassError('Las contraseñas no coinciden')
      return
    }

    registerUser(input)
  }

  const onAcceptTermsClick = () => {
    setAcceptTerms(!acceptTerms)
    
  }

  return (
    <section className='flex flex-col gap-8 h-[100vh] justify-center items-center'>
      <Href to='/' className='flex flex-col gap-2 justify-center items-center'>
        <img className='w-14' src={LogoWebp.default} alt='Logotipo de ImpostAPI' />
        <h1 className='text-2xl font-bold'>ImpostAPI</h1>
      </Href>

      <Card>
        <h4 className='text-2xl font-bold'>Crea tu cuenta</h4>
        <p className='text-[var(--secondary-text-color)]'>Empieza a diseñar tus API's en segundos.</p>
        <form className='flex flex-col justify-center items-center mt-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col gap-3.5'>
            <Input 
            type='text' 
            label='Nombre' 
            error={errors.name ? errors.name.message : ''}
            placeholder='Juan Alberto'
            {
              ...register('name', {
                required: 'Este campo es obligatorio',
              })
            }
            />

            <Input 
            type='text' 
            label='Nombre de usuario' 
            inputIcon={<IconAt />}
            error={errors.username ? errors.username.message : (customUsernameError != '' ? customUsernameError : '')}
            placeholder='usuario'
            {
              ...register('username', {
                required: 'Este campo es obligatorio',
                maxLength: {
                  value: 20,
                  message: 'No puede tener más de 20 caracteres'
                }
              })
            }
            />

            <Input 
            type='email' 
            inputIcon={<IconMail />} 
            label='Correo electrónico'
            error={errors.email ? errors.email.message : (customEmailError != '' ? customEmailError : '')}
            {
              ...register('email', {
                required: 'Este campo es obligatorio',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Debe ser un correo válido'
                }
              })
            }
            placeholder='nombre@dominio.com'/>

            <Input 
            type='password' 
            inputIcon={<IconLock/>} 
            label='Contraseña'
            error={errors.password ? errors.password.message : (customPassError != '' ? customPassError : '')}
            {
              ...register('password', {
                required: 'Este campo es obligatorio',
                minLength: {
                  value: 8,
                  message: 'Debe tener más de 8 caracteres'
                },
                maxLength: {
                  value: 24,
                  message: 'Debe tener menos de 24 caracteres'
                }
                
              })
            }
            placeholder='Tu contraseña'/>
            
            <Input 
            type='password' 
            inputIcon={<IconLock/>} 
            label='Confirmar contraseña'
            error={errors.confirmpassword ? errors.confirmpassword.message : (customPassError != '' ? customPassError : '')}
            {
              ...register('confirmpassword', {
                required: 'Este campo es obligatorio',
                minLength: {
                  value: 8,
                  message: 'Debe tener más de 8 caracteres'
                },
                maxLength: {
                  value: 24,
                  message: 'Debe tener menos de 24 caracteres'
                }
                
              })
            }
            placeholder='Confirma tu contraseña'/>

            <InputCheckBox handleClick={onAcceptTermsClick} id='termservice' checked={acceptTerms}>Acepto los Términos de Servicio y Política de Privacidad</InputCheckBox>
          </div>

          <Button 
            className='flex mt-6 w-full justify-center' 
            variant='submit'
            disabled={!acceptTerms}>
              Registrarme <IconArrowRight/> 
          </Button>
          
        </form>
      </Card>
    </section>
  )
}