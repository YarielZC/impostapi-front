import type { ReactNode } from 'react'
import StyledLabel from '../StyledLabel/StyledLabel'
import './StatusCodeLabel.css'

type colorType = `#${string}`

export default function StatusCodeLabel({children, colorText, notIcon = false}: {children: ReactNode, colorText: colorType, notIcon: boolean}) {


  return (
    <StyledLabel 
      colorText={colorText}
      notIcon={notIcon}
      textClassName='text-xs'
    >{children}</StyledLabel> 
  )
}