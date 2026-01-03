import type { ReactNode } from 'react';
import './Href.css'
import { Link } from "react-router";

export default function Href({ to, children }: {to: string, children: ReactNode}) {
  return (
    <Link
      to={to}
      className='text-[var(--secondary-text-color)]'
    >
      { children }
    </Link>
  )
}