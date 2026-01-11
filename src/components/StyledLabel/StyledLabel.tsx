import { useEffect } from 'react'
import { darkenHexColor } from '../../logic/colorTools'
import './StyledLabel.css'
import { IconPointFilled, type ReactNode } from '@tabler/icons-react'

type colorType = `#${string}`
type roundedType = 'full' | 'medium'

export default function StyledLabel({ colorText, colorIcon, children, className, textClassName, iconClassName, roundedType }: {colorText: colorType, colorIcon: colorType, children: ReactNode, className?: string, textClassName?: string, iconClassName?: string, roundedType?: roundedType}) {
  console.log(darkenHexColor(colorText, 0.3))

  const roundedValue = () => {
    if (roundedType) {
      if (roundedType == 'full') return 'calc(infinity * 1px)'
      if (roundedType == 'medium') return '1rem'
    }
    return 'calc(infinity * 1px)'
  }

  return (
    <div className={`flex w-fit gap-1 items-center py-1.5 px-4 roundeds-full  border-2 ${className}`}
    style={{
      borderColor: darkenHexColor(colorText, 0.6),
      backgroundColor: darkenHexColor(colorText, 0.85),
      borderRadius: roundedValue()
    }}
    >
      <IconPointFilled 
        className={`${iconClassName}`}
        style={{color: colorIcon}}
      ></IconPointFilled>
      <p 
        className={`mr-2 ${textClassName}`}
        style={{color: colorText}}
      >{children}</p>
    </div>
  )
}