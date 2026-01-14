import { IconPencil } from '@tabler/icons-react';
import Card from '../Card/Card';
import Href from '../Href/Href';
import StatusCodeLabel from '../StatusCodeLabel/StatusCodeLabel';
import StyledLabel from '../StyledLabel/StyledLabel';
import { shortText } from '../../logic/textTools';
import type { flatEndpoint } from '../../Interfaces/endpointsInterfaces';
import { cleanUrl } from '../../logic/cleanUrl';

export default function EndpointListCard({endpoint}: {endpoint: flatEndpoint}) {

  return (
    <Card variant='dboard' className='w-full flex max-xl:flex-col max-xl:items-start max-xl:gap-6 items-center justify-between '>
      <div className='flex flex-col gap-4'>
        
              
        <p className='text-2xl gap-6 text-[#a49cff] max-2xl:text-xl max-xl:text-lg  max-md:w-full max-md:trun max-[1370px]:flex hidden max-sm:font-bold'>{shortText(endpoint.projectName,20)} / {shortText(endpoint.name, 20)}<StatusCodeLabel className='max-sm:hidden' size='xs' roundedType='full' code={endpoint.status_code} /></p>
        <p className='text-2xl flex gap-6 text-[#a49cff] max-2xl:text-xl max-xl:text-lg  max-md:w-full max-md:trun max-[1370px]:hidden'>{shortText(endpoint.projectName,40)} / {shortText(endpoint.name, 40)}<StatusCodeLabel size='xs' roundedType='full' code={endpoint.status_code} /></p>

        <div className=' flex justify-between items-center max-md:w-full'>
          <div className='flex gap-10 items-center max-2xl:gap-5 max-md:w-full max-sm:flex-col max-sm:items-start'>
            <div className='flex gap-2 items-center'>
              <StyledLabel 
                colorText='#9990f9'
                notIcon
                className='max-sm:hidden'
                roundedType='medium'
                textClassName='text-base px-6 py-1 font-bold font-mono max-2xl:text-sm max-2xl:px-3 '
              >{endpoint.method.toUpperCase()}</StyledLabel>
              <div className='items-center justify-center w-full gap-4 hidden max-sm:flex'>
                <StatusCodeLabel size='xs' roundedType='medium' className='hidden max-sm:inline' code={endpoint.status_code} />
                <StatusCodeLabel size='xs' roundedType='medium' className='hidden max-sm:inline' code={endpoint.method.toUpperCase()} />
              </div>
            </div>
            <div className='flex flex-col gap-1'>

              <p className='flex gap-4 text-white text-xl font-mono font-bold max-2xl:text-lg max-xl:text-base max-sm:text-sm'>
                {cleanUrl(endpoint.path_url)}
                <span className='text-[#a49cff]'>({endpoint.delay ? endpoint.delay : 0}ms)</span>
              </p>
              <p className='text-[var(--secondary-text-color)] max-xl:text-sm max-sm:text-xs'>{shortText(endpoint.description, 55)}</p>
            </div>
            
          </div>
        </div>
      </div>
      

      <Href to='/dashboard/projects' className='max-xl:flex max-xl:w-full '>
        <button type='button' className='flex-6 max-xl:w-11/12 max-xl:flex-none max-xl:mx-auto max-xl:justify-center max-xl:font-bold px-4 py-3 text-white flex gap-2 bg-[#5a5af6] rounded-md text-lg cursor-pointer hover:bg-[#4e4edc] max-2xl:text-base max-xl:text-base max-xl:py-2.5 max-xl:text-center max-sm:text-sm max-sm:py-1.5 max-sm:items-center max-sm:font-normal'>
          Editar endpoint
          <IconPencil className='max-sm:w-5'/>
        </button>
      </Href>
      
    </Card>
  )
}