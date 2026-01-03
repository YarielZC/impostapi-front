import type { ReactNode } from 'react'
import './Button.css'
import { cn } from '../../lib/utils'

type variantType = 'primary' | 'secondary' 

export default function Button({ children, variant, className }: {children: ReactNode, variant?: variantType | undefined, className?: string | undefined}) {
  return (

    <button
      className={cn(
        className,
        !variant && 'bg-red-500',

        variant == 'primary' && 'bg-[var(--button-color)] text-white py-[0.4rem] px-4 rounded-lg font-semibold hover:bg-[var(--button-color-hover)]'
      )}
    >
      {children}
    </button>
  )
}