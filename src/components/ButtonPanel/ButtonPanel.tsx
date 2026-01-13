import { useEffect, useState, type ReactNode } from 'react'
import Href from '../Href/Href'
import './ButtonPanel.css'
import { useLocation } from 'react-router'

export default function ButtonPanel( {to, children, icon, className}: {to: string, children:ReactNode, icon: ReactNode, className?: string} ) {
  const [isActive, setIsActive] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname == to) {
      setIsActive(true)
      return
    }
    setIsActive(false)
  }, [location, to])

  return (
    <Href className={`${className}`} to={to}>
      <button
        className='cursor-pointer flex gap-2.5 py-3 px-4 rounded-lg w-full'
        style={{
          color: `${isActive ? `#ffffff` : 'var(--secondary-text-color)'}`,
          backgroundColor: `${isActive ? `#262626` : 'transparent'}`
        }}
      >
        <div style={{
          color: `${isActive ? `var(--text-resalt-color)`: `var(--secondary-text-color)`}`
        }}>
          {icon}
        </div>
        {children}
      </button>
    </Href>
  )
}