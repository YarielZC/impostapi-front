import type { MouseEventHandler, ReactNode } from 'react'
import './Button.css'
import { cn } from '../../lib/utils'

type variantType = 'primary' | 'secondary' | 'submit'
type TypeType = 'submit' | 'reset' | 'button'

export default function Button({ children, variant, className, onClick, disabled, type}: {children: ReactNode, variant?: variantType | undefined, className?: string | undefined, onClick?: MouseEventHandler<HTMLButtonElement>, disabled?: boolean, type?: TypeType}) {

  return (

    <button
    type={type}
      onClick={onClick}
      className={cn(
        `${className} cursor-pointer`,
        !variant && 'bg-red-500',
        
        variant == 'secondary' && 'bg-[var(--secondary-button-color)] border border-[var(--dark-mode-border-color)] text-white py-[0.4rem] px-6 rounded-lg font-semibold hover:bg-[#1d1d28]',
        variant == 'primary' && 'bg-[var(--button-color)] text-white py-[0.4rem] px-4 rounded-lg font-semibold hover:bg-[var(--button-color-hover)]',
        variant == 'submit' && 'bg-[var(--button-color)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[var(--button-color-hover)]',
        disabled && 'bg-gray-600/50 text-gray-400 hover:text-gray-400 hover:bg-gray-600/50 cursor-not-allowed',
      )}
      disabled={disabled ? disabled : false}
    >
      {children}
    </button>
  )
}