import { cn } from '../../lib/utils'
import './FilledCircle.css'

export default function FilledCircle({ className, color, width }: { className?: string, color: string, width?: string | number }) {
  return <div 
            className={cn(
              `${className} rounded-full aspect-square`,
              !width &&  'w-4 h-4',
            )  
            } 
            style={{
              backgroundColor: color,
              width: `${width ? width : ''}`
            }}
          />
}