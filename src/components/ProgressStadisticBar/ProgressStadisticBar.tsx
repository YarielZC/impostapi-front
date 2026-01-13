import './ProgressStadisticBar.css'

export default function ProgressStadisticBar({title, description, percent}: {title: string, description: string, percent: number | string}) {
  return (
    <div 
      className='relative bg-[#313131] w-full px-4 py-3 rounded-lg overflow-hidden flex items-center justify-between'
    > 
      <div className='flex flex-col gap-2 w-1/2'>
        <p className='text-white text-xl z-20'>{title}</p>
        <p className=' text-sm text-[var(--secondary-text-color)] z-20'>{description}</p>
      </div>

      <p className='text-[#5146ce] text-2xl z-20 flex font-bolds font-mono justify-center items-center w-fit'>{`${percent}`}%</p>
    
      <div 
        className='absolute h-full left-0 z-10 top-0 rounded-r-2xl bg-[#685bf8]/20 w-1/2'
        style={{
          width: `${percent}%`
        }}
      />
    </div>
  )
}