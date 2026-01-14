import { formatCompactNumber } from '../../logic/formatNumberCompact'
import Card from '../Card/Card'
import './StatsCard.css'

export default function StatsCard({amount, children}: {amount: number, children: string}) {

  return (
    <Card variant='dboard' className='w-full'>
      <div className='max-lg:flex max-lg:gap-2 max-md:flex-col max-md:items-center'>
        <p className='text-lg text-[var(--secondary-text-color)] max-xl:text-base max-md:text-center max-sm:text-xs'>{children.toUpperCase()}</p>
        <p className='text-white text-2xl font-bold flex gap-2 items-center max-xl:text-xl max-sm:text-base'>{formatCompactNumber(amount)}</p>
      </div>
    </Card>
  )
}