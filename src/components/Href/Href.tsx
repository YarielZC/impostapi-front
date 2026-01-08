import type { ReactNode } from 'react';
import './Href.css'
import { Link } from "react-router";

export default function Href({ to, className, children }: {to: string, className?: string,children: ReactNode}) {
  return (
    <Link
      to={to}
      className={`${className} text-[var(--secondary-text-color)]`}
    >
      { children }
    </Link>
  )
}