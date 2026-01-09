
import type { ReactNode } from 'react';
import Card from '../Card/Card';
import './CardExplain.css'

export default function CardExplain({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <Card className='flex flex-col gap-6 pb-14'>
      <div className='p-4 bg-[var(--dark-blue-color)] w-fit text-[var(--text-resalt-color)] rounded-lg'>
        {icon}
      </div>

      <p className='text-white text-2xl font-bold'>{title}</p>
      <p className='text-[var(--secondary-text-color)]'>{description}</p>
    </Card>
  )
}