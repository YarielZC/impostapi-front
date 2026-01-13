import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AutContext/useAuth';
import ConsoleText from '../ConsoleText/ConsoleText';
import './Console.css'
import type { logInterface } from '../../Interfaces/userDataInterface';
import { processISODate } from '../../logic/dateWork';
import { IconAlertTriangle, IconPointFilled, IconRefresh } from '@tabler/icons-react';

export default function Console() {
  const BASE_URL = import.meta.env.VITE_BASE_URL
  const limitLogs = 20

  const { withToken } = useAuth()
  const [logHistory, setLogHistory] = useState<logInterface[]>([])
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const calculatePorcentLogs = () => {
    return (logHistory.length * 100) / limitLogs
  }

  const refreshHandleClick = () => {
    setRefreshing(true)
    loadLogs()
    
    setTimeout(()=>{
      setRefreshing(false)
    }, 500)
  }

  


  const loadLogs = async () => {
    withToken((data) => {
      setLogHistory(data)
    },
    `${BASE_URL}/dashboard/me/get_logs`,
    'GET',
    'application/json'
    )

    // let response = await fetch(`${BASE_URL}/dashboard/me/get_logs`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${get_token()}`,
    //     'Content-Type': 'application/json'
    //   } 
    // })

    // if (!response.ok) {
    //   const check = await checkAndgetNewToken(response.status)
    //   if (!check.status) {
    //     throw new Error(`Error en la peticion: ${response.status}`)
    //   } else {
    //     response = await fetch(`${BASE_URL}/dashboard/me/get_logs`, {
    //       method: 'GET',
    //       headers: {
    //         'Authorization': `Bearer ${check.newToken}`,
    //         'Content-Type': 'application/json'
    //       } 
    //     })
    //     if (!response.ok) {
    //       throw new Error(`Error en la peticion: ${response.status}`)
    //     }
    //     const data = await response.json()
    //     setLogHistory(data)
    //     return
    //   }
    // }
    // if (response.ok) {
    //   const data = await response.json()
    //   setLogHistory(data)
    // }
    // return
  }

  useEffect(() => {
    loadLogs()
  }, [])
  return (
    <section className='w-full flex-1 flex flex-col rounded-xl border-2 border-[var(--dark-border-dashboard)] h-fit custom-shado'>
      <div className='flex items-center justify-between py-2 px-6 border-b-2 border-b-[var(--dark-border-dashboard)] bg-[var(--dark-dashboard-card-color)] rounded-t-xl'>
        <p className='text-[#dcdcdc] font-bolds '>Historial de peticiones (Logs)</p>
        <button onClick={refreshHandleClick} type='button' className=' text-[#b7b7b7]'><IconRefresh style={{
          rotate: `${refreshing ? '360deg': '0deg'}`,
          transition: 'all 0.5s ease' 
        }}/></button>
      </div>

      <div className='h-80 flex flex-col gap-4 justify-end-safe overflow-y-scroll overscroll-y-contain bg-[#121212]'>
        { 
          logHistory?.map((log, index) => {
            return (
              <ConsoleText
                key={index}
                timestamp={processISODate(log.timestamp)}
                projectName={log.project_name}
                endpointName={log.endpoint_name}
                method={log.method.toUpperCase()}
                code={log.status_code}
                url={`/${log.url}`}
                delay={log.delay ? log.delay : '0'}
              />
            )
          })
        }
      </div>

      <div className='flex items-center justify-end py-2 px-6 rounded-b-2xl border-t border-t-[var(--border-color)] bg-[var(--dark-dashboard-card-color)] gap-2'>
        {calculatePorcentLogs() != 100 ? <IconPointFilled className={`w-fit text-[#10b981]`}></IconPointFilled> :
        <IconAlertTriangle className='w-5 text-red-700'/>}
        <p className='text-sm' style={{
          color: calculatePorcentLogs() == 100 ? 'oklch(50.5% 0.213 27.518)': 'var(--secondary-text-color)'
        }}> Logs: {logHistory.length} / {limitLogs}  ({calculatePorcentLogs()}%)</p>
      </div>
    </section>
  )
}