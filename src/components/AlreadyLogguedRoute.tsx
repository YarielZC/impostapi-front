
import { Navigate } from 'react-router';
import { useAuth } from '../context/AutContext/useAuth';
import { type ReactNode } from 'react';

export default function AlreadyLogguedRoute ({ children }: {children: ReactNode}) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to='/' replace/>
  }

  return children;
};