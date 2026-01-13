import { IconPencil } from '@tabler/icons-react';
import Card from '../Card/Card';
import Href from '../Href/Href';
import StatusCodeLabel from '../StatusCodeLabel/StatusCodeLabel';
import StyledLabel from '../StyledLabel/StyledLabel';
import { shortText } from '../../logic/textTools';
import type { flatEndpoint } from '../../Interfaces/endpointsInterfaces';

export default function EndpointListCard({endpoint}: {endpoint: flatEndpoint}) {
  return (
    <Card variant='dboard' className='w-full flex items-center justify-between '>
      <div className=' flex flex-col gap-4'>

              
        <p className='text-2xl flex gap-6 text-[#a49cff]'>{endpoint.projectName} / {endpoint.name}<StatusCodeLabel size='xs' roundedType='full' code={200} /></p>

        <div className=' flex justify-between items-center'>
          <div className='flex gap-10 items-center'>
            <StyledLabel 
              colorText='#9990f9'
              notIcon
              roundedType='medium'
              textClassName='text-base px-6 py-1 font-bold font-mono'
            >{endpoint.method.toUpperCase()}</StyledLabel>  
            <div className='flex flex-col gap-1'>

              <p className='flex gap-4 text-white text-xl font-mono font-bold'>
                {endpoint.path_url}
                <span className='text-[#a49cff]'>({endpoint.delay ? endpoint.delay : 0}ms)</span>
              </p>
              <p className='text-[var(--secondary-text-color)]'>{shortText('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe ducimus eveniet', 55)}</p>
            </div>
            
          </div>
        </div>
      </div>
      <Href to='/dashboard/projects'>
        <button type='button' className='flex-6 px-4 py-3 text-white flex gap-2 bg-[#5a5af6] rounded-md text-lg cursor-pointer hover:bg-[#4e4edc] '>
          Editar endpoint
          <IconPencil/>
        </button>
      </Href>
    </Card>
  )
}