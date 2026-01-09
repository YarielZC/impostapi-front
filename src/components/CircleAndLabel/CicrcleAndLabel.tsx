import { IconPointFilled } from '@tabler/icons-react';
import type { ReactNode } from 'react';

export default function CicrcleAndLabel({ className, textClassName, iconClassName, children }: { className?: string, textClassName?: string, iconClassName?: string, children: ReactNode }) {
  return (
    <div className={`flex w-fit gap-1 items-center ${className}`}>
      <IconPointFilled className={`w-fit ${iconClassName}`}></IconPointFilled>
      <p className={`mr-2 ${textClassName}`}>{children}</p>
    </div>
  )
}