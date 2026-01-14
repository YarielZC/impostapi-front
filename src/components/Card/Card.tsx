import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type variantType = 'normal' | 'dboard'
export default function Card ({className, children, variant = 'normal'}: {className?: string, children: ReactNode, variant?: variantType}) {
  return (
    <div 
    className={cn(`
    ${className} p-8 border-2 rounded-xl  max-sm:w-full max-sm:px-5 py-7, max-lg:px-5 max-lg:py-6 max-sm:py-3`,
    variant == 'normal' && 'border-[var(--dark-mode-border-color)] bg-[var(--dark-mode-card-form-color)]',
    variant == 'dboard' && 'bg-[var(--dark-dashboard-card-color)] border-[var(--dark-border-dashboard)]'
    
    )}>
      {children}
    </div>
  )
}