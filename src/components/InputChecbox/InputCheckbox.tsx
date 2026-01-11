import type { ReactNode } from 'react';
import { IconCheck } from '@tabler/icons-react';
import { cn } from '../../lib/utils';

export default function InputCheckBox ({id, checked, handleClick, children}: {id: string, checked?: boolean,children: ReactNode, handleClick: React.MouseEventHandler | undefined}) {
  return (
    <div className='relative flex gap-2 items-center text-[var(--secondary-text-color)]'>
      <IconCheck 
        onClick={handleClick} 
        className={cn(
          'absolute text-white w-5',
        checked && 'block',
        !checked && 'hidden')}
      />
      <input onClick={handleClick} checked={checked} id={id} className='appearance-none bg-[var(--dark-mode-input-color)] h-5 w-5 aspect-square border-2 border-[var(--text-input-color)] rounded-md checked:bg-[var(--button-color-hover)] checked:border-transparent focus:outline-none cursor-pointer transition duration-200' type='checkbox'/>
      <label className='select-none cursor-pointer max-sm:text-sm' htmlFor={id}>{children}</label>
    </div>
  )
}