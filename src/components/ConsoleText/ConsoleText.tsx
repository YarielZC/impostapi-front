import { cleanUrl } from '../../logic/cleanUrl';
import { shortText } from '../../logic/textTools';
import StatusCodeLabel from '../StatusCodeLabel/StatusCodeLabel';
import StyledLabel from '../StyledLabel/StyledLabel';

export default function ConsoleText({timestamp, projectName, endpointName, method, code, url, delay}: {timestamp?: string, projectName: string, endpointName: string, method: string, code: string | number, url: string, delay: string | number}) {

  return (
    <div className='px-3 py-1.5 text-sm font-mono flex flex-col gap-0 w-full odd:bg-[#101010] even:bg-[#141414]/90 hover:bg-[#262626]'>
      <div className='text-[var(--secondary-text-color)] flex items-center justify-between max-sm:justify-start max-sm:gap-4'>
        <p className='items-center flex gap-2 max-sm:text-xs'>
          {'> '}
          {timestamp} 
          <span className='text-[#a49cff] flex items-center gap-2 max-sm:hidden'>{`[${shortText(projectName,14)}/ ${endpointName}]:`}
          </span>
        </p>
        <StyledLabel 
            colorText='#685bf8'
            notIcon
            className='max-sm:hidden'
            textClassName='text-xs'
        >{method}</StyledLabel>  
        <p className='font-mono text-[#685bf8] hidden max-sm:inline'>{method}</p>
      </div>
      <span className='text-[#a49cff] items-center pt-1 pb-1 hidden max-sm:flex'>{`[${shortText(projectName,14)}/ ${endpointName}]:`}
        </span>
      <div className='px-0 py-1.5'>
        <div className='text-white flex items-center gap-2'>
          <StatusCodeLabel size='xs' roundedType='medium' code={code}/>
          <p className='max-sm:text-xs'>{cleanUrl(url)}</p>
        </div>
      </div>
      <p className='block text-end text-[var(--secondary-text-color)] max-sm:text-xs'> {`${delay}`}ms</p>
    </div>
  )
}