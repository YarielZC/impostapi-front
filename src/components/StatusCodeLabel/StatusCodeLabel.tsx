import { cn } from '../../lib/utils'
import StyledLabel from '../StyledLabel/StyledLabel'
import './StatusCodeLabel.css'

type roundedTypes = 'full' | 'medium'
type sizeType = 'xs' | 'sm' | 'base' | 'lg' | 'xl' 
export default function StatusCodeLabel({code, size, roundedType}: { code: string | number, size: sizeType, roundedType: roundedTypes}) {
  const addDescriptionCode = (): {text: string, color: `#${string}`} => {
    if (code == 200) {
      return {text: `${code} OK`, color: '#24d364'}
    }
    if (code == 201) {
      return {text: `${code} Created`, color: '#24d364'}
    }
    if (code == 204) {
      return {text: `${code} No content`, color: '#c3cada'}
    }


    return {text: `${code}`, color: '#e46b15'}
  }

  return (
    <StyledLabel 
      colorText={addDescriptionCode().color}
      notIcon
      textClassName={cn(`text-${size} font-mono`)}
      roundedType={roundedType}
    >{addDescriptionCode().text}</StyledLabel> 
  )
}