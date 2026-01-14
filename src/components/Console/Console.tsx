import ConsoleText from '../ConsoleText/ConsoleText';
import './Console.css'
import { processISODate } from '../../logic/dateWork';
import { IconAlertTriangle, IconPointFilled, IconRefresh } from '@tabler/icons-react';
import { useAPIContext } from '../../context/APIContext/useAPIContext';
import { useState } from 'react';

export default function Console() {
  const limitLogs = 20
  const {logHistory, loadLogs} = useAPIContext()
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const [inCooldown, setInCooldown] = useState(false)

  const calculatePorcentLogs = () => {
    if (logHistory.length === 0) return 0;
    return Math.round((logHistory.length * 100) / limitLogs)
  }

  const refreshHandleClick = async () => {
    if (refreshing || inCooldown) return;

    setInCooldown(true);
    setTimeout(() => {
      setInCooldown(false);
    }, 5000); 

    setRefreshing(true);
    
    await loadLogs();
    
    setTimeout(()=>{
      setRefreshing(false)
    }, 500)
  }

  return (
    <section className='w-full flex-1 flex flex-col rounded-lg border-2 border-[var(--dark-border-dashboard)] h-fit max-sm:max-h-80'>
      <div className='flex items-center justify-between py-2 px-6 border-b border-b-[var(--dark-border-dashboard)] bg-[var(--dark-dashboard-card-color)] rounded-t-lg'>
        <p className='text-[#dcdcdc] max-sm:text-sm'>Historial de peticiones (Logs)</p>
        <button 
          onClick={refreshHandleClick} 
          type='button' 
          className='text-[#b7b7b7] hover:text-white transition-colors'
          disabled={inCooldown}
        >
          <IconRefresh style={{
            transform: `rotate(${refreshing ? '360deg' : '0deg'})`,
            transition: 'transform 0.5s ease' 
          }}/>
        </button>
      </div>

      <div className='h-80 flex flex-col justify-end-safe overflow-y-scroll overscroll-y-contain bg-[#101010]'>
        { 
          logHistory?.reverse().map((log, index) => {
            return (
              <ConsoleText
                key={index} 
                timestamp={processISODate(log.timestamp)}
                projectName={log.project_name}
                endpointName={log.endpoint_name}
                method={log.method.toUpperCase()}
                code={log.status_code}
                url={log.url}
                delay={log.delay ? log.delay : '0'}
              />
            )
          })
        }
      </div>

      <div className='flex items-center justify-end py-2 px-6 rounded-b-lg border-t border-t-[var(--dark-border-dashboard)] bg-[var(--dark-dashboard-card-color)] gap-2'>
        {calculatePorcentLogs() < 100 ? (
           <IconPointFilled className={`w-fit text-[#10b981]`} />
        ) : (
           <IconAlertTriangle className='w-5 max-sm:w-4 text-red-700'/>
        )}
        
        <p className='text-sm max-sm:text-xs' style={{
          color: calculatePorcentLogs() >= 100 ? 'oklch(50.5% 0.213 27.518)': 'var(--secondary-text-color)'
        }}> 
          Logs: {logHistory.length} / {limitLogs} ({calculatePorcentLogs()}%)
        </p>
      </div>
    </section>
  )
}