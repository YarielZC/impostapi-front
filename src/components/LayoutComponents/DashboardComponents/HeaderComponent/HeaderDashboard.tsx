import { IconMenu, IconPlus, IconX } from '@tabler/icons-react'
import Button from '../../../Button/Button'
import SearchInput from '../../../SearchInput/SearchInput'
import './HeaderDashboard.css'
import { useEffect, useRef, useState, type ChangeEventHandler } from 'react'

export function HeaderDashboard({onChange, showMenu, showingMenu}: {onChange: ChangeEventHandler<HTMLInputElement>, showMenu: React.MouseEventHandler<HTMLButtonElement>, showingMenu: boolean}) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [inputValue, setInputValue] = useState<string>('')

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    onChange(event)
  }


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && (event.key === 'k')) {
        event.preventDefault()
        inputRef.current?.focus()
      }
      if (event.code == 'Escape') {
        event.preventDefault()
        setInputValue('')
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  
  return (
    <header className='flex items-center px-8 top-0 justify-between fixed w-[calc(100%-20rem)] h-20 border-b-2 border-b-[var(--dark-mode-border-color)] bg-[var(--dark-mode-background-color)] z-50 max-2xl:w-[calc(100%-15rem)] max-lg:w-[calc(100%-4.5rem)] max-lg:px-6 max-sm:w-full max-sm:pl-4'>
      <div className='flex gap-2'>
        <button type='button' onClick={showMenu} className='text-white sm:hidden'>
          {!showingMenu ? <IconMenu/> : <IconX/>}
        </button>
        <h4 className='text-3xl font-bold max-md:text-xl max-sm:text-lg text-white max-sm:text-[#b7b7b7]'>
          Dashboard
        </h4>
        
      </div>

      <div className='flex gap-8 max-sm:gap-4'>
        <SearchInput
          ref={inputRef} 
          placeholder='Busca entre tus endpoints...'
          onChange={onChangeHandle}
          value={inputValue}
        />
        <Button variant='primary' className='flex gap-2 max-sm:hidden'><IconPlus /> <span className='max-[1110px]:hidden'>Crear nuevo endpoint</span></Button>
        <button className='cursor-pointer max-sm:text-xs items-center bg-[var(--button-color)] text-white py-[0.4rem] px-4 rounded-xl font-semibold hover:bg-[var(--button-color-hover)] max-sm:px-2 max-sm:py-2 sm:hidden'><IconPlus /></button>
      </div>
    </header>
  )
}