import type { MouseEventHandler, ReactNode } from 'react'
import './Button.css'
import { cn } from '../../lib/utils'

type variantType = 'primary' | 'secondary' | 'submit'

export default function Button({ children, variant, className, onClick, disabled}: {children: ReactNode, variant?: variantType | undefined, className?: string | undefined, onClick?: MouseEventHandler<HTMLButtonElement>, disabled?: boolean}) {

  return (

    <button
      onClick={onClick}
      className={cn(
        `${className} cursor-pointer`,
        !variant && 'bg-red-500',

        variant == 'primary' && 'bg-[var(--button-color)] text-white py-[0.4rem] px-4 rounded-lg font-semibold hover:bg-[var(--button-color-hover)]',
        variant == 'submit' && 'bg-[var(--button-color)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[var(--button-color-hover)]',
        disabled && 'bg-gray-600/50 text-gray-400 hover:text-gray-400 hover:bg-gray-600/50 cursor-not-allowed'
      )}
      disabled={disabled ? disabled : false}
    >
      {children}
    </button>
  )
}