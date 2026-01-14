import { darkenHexColor } from '../../logic/colorTools'
import './StyledLabel.css'
import { IconPointFilled, type ReactNode } from '@tabler/icons-react'

type colorType = `#${string}`
type roundedType = 'full' | 'medium'

export default function StyledLabel({ colorText, colorIcon, children, className, textClassName, iconClassName, roundedType, notIcon }: {colorText: colorType, colorIcon?: colorType, children: ReactNode, className?: string, textClassName?: string, iconClassName?: string, roundedType?: roundedType, notIcon?: boolean}) {

  const roundedValue = () => {
    if (roundedType) {
      if (roundedType == 'full') return 'calc(infinity * 1px)'
      if (roundedType == 'medium') return '0.5rem'
    }
    return 'calc(infinity * 1px)'
  }

  return (
    <div className={`${className} h-fit flex w-fit gap-1 items-center py-1.5 px-2 border-2`}
    style={{
      borderColor: darkenHexColor(colorText, 0.6),
      backgroundColor: darkenHexColor(colorText, 0.85),
      borderRadius: roundedValue()
    }}
    >
      {!notIcon && <IconPointFilled 
        className={`${iconClassName}`}
        style={{color: colorIcon}}
      ></IconPointFilled>}
      <p 
        className={`flex items-center h-fit leading-none ${textClassName}`}
        style={{
          color: colorText,
          marginRight: !notIcon ? '0.5rem' : 0
        }}
      >{children}</p>
    </div>
  )
}