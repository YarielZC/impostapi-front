
import type { ReactNode } from 'react';
import Card from '../Card/Card';
import './CardExplain.css'

export default function CardExplain({ icon, title, description, className }: { icon: ReactNode, title: string, description: string, className?: string }) {
  return (
    <Card className={`${className} flex flex-col gap-6 pb-14 max-sm:pb-7 max-sm:justify-center`}>
      <div className='flex flex-col gap-4 max-sm:flex-row max-sm:items-center'>

        <div className='p-4 bg-[var(--dark-blue-color)] w-fit text-[var(--text-resalt-color)] rounded-lg h-fit'>
          {icon}
        </div>

        <p className='text-white text-2xl font-bold max-sm:text-xl'>{title}</p>
      </div>
      <p className='text-[var(--secondary-text-color)]'>{description}</p>
    </Card>
  )
}