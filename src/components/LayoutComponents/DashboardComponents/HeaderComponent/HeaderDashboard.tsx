import { IconPlus } from '@tabler/icons-react'
import Button from '../../../Button/Button'
import SearchInput from '../../../SearchInput/SearchInput'
import './HeaderDashboard.css'
import { useEffect, useRef } from 'react'

export function HeaderDashboard() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && (event.key === 'k')) {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  
  return (
    <header className='flex items-center px-8 top-0 justify-between fixed w-[calc(100%-20rem)] h-20 border-b-2 border-b-[var(--dark-mode-border-color)] bg-[var(--dark-mode-background-color)] z-50'>
      <h4 className='text-3xl font-bold'>
        Dashboard
      </h4>

      <div className='flex gap-8'>
        <SearchInput
          ref={inputRef} 
          placeholder='Busca entre tus endpoints...'
          onChange={() => {return}}
        />
        <Button variant='primary' className='flex gap-2'><IconPlus /> Crear nuevo endpoint</Button>
      </div>
    </header>
  )
}