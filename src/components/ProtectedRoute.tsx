
import { Navigate } from 'react-router';
import { useAuth } from '../context/AutContext/useAuth';
import { type ReactNode } from 'react';

export default function ProtectedRoute ({ children }: {children: ReactNode}) {
  const { isAuthenticated, ignorateRedirections } = useAuth();
  console.log('se ejecutp')
  if (ignorateRedirections) return <Navigate to='/'/>

  if (!isAuthenticated && !ignorateRedirections) {
    return <Navigate to='/login'/>
  }

  return children;
};