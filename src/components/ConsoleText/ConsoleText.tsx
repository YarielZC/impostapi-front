import StatusCodeLabel from '../StatusCodeLabel/StatusCodeLabel';
import StyledLabel from '../StyledLabel/StyledLabel';

export default function ConsoleText({timestamp, projectName, endpointName, method, code, url, delay}: {timestamp?: string, projectName: string, endpointName: string, method: string, code: string | number, url: string, delay: string | number}) {
  
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
    <div className='px-3 py-1.5 text-sm font-mono flex text-[#c3cada]c flex-col gap-0 w-full hover:bg-[#262626]'>
      <div className='text-[var(--secondary-text-color)] flex items-center justify-between'>
        <p className='items-center flex gap-2'>
          {'> '}
          {timestamp} 
          
          <span className='text-red-400 flex items-center gap-2'>{`[${projectName}/ ${endpointName}]:`}
          </span>
        </p>
        <StyledLabel 
            colorText='#685bf8'
            notIcon
            textClassName='text-xs'
          >{method}</StyledLabel>  
      </div>
      <div className='px-0 py-1.5'>
        <div className='text-white flex items-center gap-2'>
          <StatusCodeLabel
            colorText={addDescriptionCode().color}
            notIcon
          >{addDescriptionCode().text}</StatusCodeLabel>
          <p>{url}</p>
        </div>
      </div>
      <p className='block text-end text-[var(--secondary-text-color)]'> {`${delay}`}ms</p>
    </div>
  )
}