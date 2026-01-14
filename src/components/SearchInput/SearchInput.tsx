import type { ChangeEventHandler } from 'react'
import './SearchInput.css'
import { IconCommand, IconSearch } from '@tabler/icons-react'

export default function SearchInput({placeholder, onChange, ref, value}: {placeholder: string, onChange: ChangeEventHandler<HTMLInputElement>, ref: React.Ref<HTMLInputElement>, value: string}) {
  return (
    <div className='relative w-fit'>
      <div className='text-[var(--secondary-text-color)] absolute top-3.5 max-2xl:top-2.5 left-3 max-sm:top-[2.2rem] max-sm:hidden'>
        <IconSearch />
      </div>
      <div className='flex items-center text-[var(--secondary-text-color)] absolute top-[8px]  max-sm:top-[2.2rem] left-[calc(100%-4.5rem)] border-2 border-[var(--dark-border-dashboard)] py-1 px-3 rounded-xl max-2xl:py-0 max-2xl:px-1.5 max-2xl:top-2 max-2xl:left-[calc(100%-3.5rem)] max-md:hidden'>
        <IconCommand className='w-5 h-5'/><span>K</span>
      </div>
      <div className='w-full max-sm:flex max-sm:items-center max-sm:h-full'>
        <input
          ref={ref}
          className='max-2xl:w-80 max-2xl:py-2 py-3 pl-10 rounded-xl text-[#ffffff] placeholder-[var(--text-input-color)] bg-[var(--dark-dashboard-card-color)] border-2 border-[var(--dark-border-dashboard)] outline-none max-sm:text-sm max-sm:py-3 max-md:pr-4 max-md:w-64 pr-20 max-sm:hidden'
          type='search' 
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <input
          className='max-2xl:w-80 max-2xl:py-2 py-3 pl-10 rounded-xl text-[#ffffff] placeholder-[var(--text-input-color)] bg-[var(--dark-dashboard-card-color)] border-2 border-[var(--dark-border-dashboard)] outline-none max-sm:py-3 max-md:pr-4 max-md:w-64 pr-20 max-sm:hiddens max-sm:absolute max-sm:right-0 max-sm:w-32 max-sm:px-2 max-sm:text-xs max-sm:inline hidden'
          type='search' 
          placeholder={'Busca endpoints...'}
          onChange={onChange}
          value={value}
        />
      </div>
    
    </div>
  )
}