import './StyledLabel.css'
import { IconPointFilled, type ReactNode } from '@tabler/icons-react'
export default function StyledLabel({ children, className, textClassName, iconClassName }: {children: ReactNode, className?: string, textClassName?: string, iconClassName?: string}) {
  return (
    <div className={`flex w-fit gap-1 items-center py-1.5 px-4 rounded-full bg-[var(--dark-mode-card-form-color)] border-2 border-[var(--dark-mode-border-color)] ${className}`}>
      <IconPointFilled className={`${iconClassName}`}></IconPointFilled>
      <p className={`mr-2 ${textClassName}`}>{children}</p>
    </div>
  )
}