import type { flatEndpoint } from '../../Interfaces/endpointsInterfaces'
import EndpointListCard from '../EndpointListCard/EndpointListCard'
import './ListEndpointsComponent.css'

export default function ListComponent({listToRender}: {listToRender: flatEndpoint[]}) {
  return (
    <section className='px-20 py-10 flex flex-col w-full'>
          <div className='flex justify-between w-full mx-auto h-10 items-center'>
            <h6 className='inline text-2xl'>Endpoints</h6>
            <p className='text-[var(--secondary-text-color)]'>
              de un total de {listToRender.length} endpoints
            </p>
          </div>
          <hr className='border-[var(--secondary-text-color)] w-full'/>
          
          <div className='flex flex-col gap-6 w-full mt-6'>
              {
                listToRender.map((endpoint: flatEndpoint) => {
                  return <EndpointListCard key={endpoint._id} endpoint={endpoint}/>
                })
              }
          </div>
        </section>
  )
}