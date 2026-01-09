import './FilledCircle.css'

export default function FilledCircle({ className, color }: { className?: string, color: string }) {
  return <div className={`${className} w-4 h-4 rounded-full`} style={{backgroundColor: color}}/>
}