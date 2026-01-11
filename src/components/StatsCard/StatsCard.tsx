import { formatCompactNumber } from '../../logic/formatNumberCompact'
import Card from '../Card/Card'
import './StatsCard.css'

export default function StatsCard({amount, children}: {amount: number, children: string}) {

  return (
    <Card variant='dboard' className='w-full'>
      <div>
        <p className='text-lg text-[var(--secondary-text-color)]'>{children.toUpperCase()}</p>
        <p className='text-white text-2xl font-bold flex gap-2 items-center'>{formatCompactNumber(amount)}</p>
      </div>
    </Card>
  )
}