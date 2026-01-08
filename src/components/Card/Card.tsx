import type { ReactNode } from 'react';

export default function Card ({className, children}: {className?: string, children: ReactNode}) {
  return (
    <div 
    className={`${className} w-fit p-8 border-2 rounded-xl border-[var(--dark-mode-border-color)] bg-[var(--dark-mode-card-form-color)] `}>
      {children}
    </div>
  )
}