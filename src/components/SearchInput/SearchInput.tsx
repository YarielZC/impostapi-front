import type { ChangeEventHandler } from 'react'
import './SearchInput.css'
import { IconCommand, IconSearch } from '@tabler/icons-react'

export default function SearchInput({placeholder, onChange, ref}: {placeholder: string, onChange: ChangeEventHandler<HTMLInputElement>, ref: React.Ref<HTMLInputElement>}) {
  return (
    <div className='relative w-fit'>
      <div className='text-[var(--secondary-text-color)] absolute top-3.5 left-3 max-sm:top-[2.2rem]'>
        <IconSearch />
      </div>
      <div className='flex items-center text-[var(--secondary-text-color)] absolute top-[8px] max-sm:top-[2.2rem] left-[calc(100%-4.5rem)] border-2 border-[var(--dark-border-dashboard)] py-1 px-3 rounded-xl'>
        <IconCommand className='w-5 h-5'/><span>K</span>
      </div>
      <input
        ref={ref}
        className='py-3 pl-10 rounded-xl text-[#ffffff] placeholder-[var(--text-input-color)] bg-[var(--dark-dashboard-card-color)] border-2 border-[var(--dark-border-dashboard)] outline-none max-sm:text-sm max-sm:py-3 pr-20'
        type='search' 
        placeholder={placeholder}
        onChange={onChange}
      />
    
    </div>
  )
}