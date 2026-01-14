import { Outlet } from 'react-router'
import './DashboardLayout.css'
import AsideDashboard from '../../components/LayoutComponents/DashboardComponents/AsideComponent/AsideDashboard'
import { HeaderDashboard } from '../../components/LayoutComponents/DashboardComponents/HeaderComponent/HeaderDashboard'
import { useAPIContext } from '../../context/APIContext/useAPIContext'
import ListEndpointsComponent from '../../components/ListEndpointsComponent/ListEndpointsComponent'
import type { flatEndpoint } from '../../Interfaces/endpointsInterfaces'
import { useEffect, useState } from 'react'
import { cleanUrl } from '../../logic/cleanUrl'
import { cn } from '../../lib/utils'

export default function DashboardLayout () {
  const {flatEndpointsList} = useAPIContext()
  const [searched, setSearched] = useState<flatEndpoint[]>([])
  const [searching, setSearching] = useState<boolean>(false)

  const onChangeHandle = (input: React.ChangeEvent<HTMLInputElement>) => {
    const newValue: string = input.target.value.toLowerCase()
    let newSearched: flatEndpoint[] = []

    if (newValue == '') {
      setSearching(false)
      return
    }
    if (searching == false) setSearching(true)

    if (['get', 'post', 'put', 'patch', 'delete', 'settings'].includes(newValue)) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.method.toLowerCase().includes(newValue)) return value
      })
    }

    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.name.toLowerCase().includes(newValue)) {
          return value
        }
      })
    }
    
    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.projectName.toLowerCase().includes(newValue)) return value
      })
    }

    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (cleanUrl(value.path_url).toLowerCase().includes(newValue)) return value
      })
    } 

    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.description.toLowerCase().includes(newValue)) return value
      })
    }
    
    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.method.toLowerCase().includes(newValue)) return value
      })
    } 

    if (newSearched.length == 0) {
      newSearched = flatEndpointsList.filter((value) => {
        if (value.status_code.toString().toLowerCase().includes(newValue)) return value
      })
    } 

    setSearched(newSearched)
  } 

  useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code == 'Escape') {
          event.preventDefault()
          setSearching(false)
        }
      }
  
      document.addEventListener('keydown', handleKeyDown)
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [])
  return (
    <section className='flex'>
      <AsideDashboard />

      <div className='ml-80 flex-4'>
        <main className='relative mt-20'>
          <HeaderDashboard onChange={onChangeHandle}/>
          <div className={cn(searching && 'hidden', !searching && 'block')}>
            <Outlet />
          </div>
          
          <section className={cn('bg-[#000000]/45s w-full h-full', searching && 'block', !searching && 'hidden')}>
            <ListEndpointsComponent
              listToRender={searched}
            />
          </section>
        </main>
      </div>
    </section>
  )
}