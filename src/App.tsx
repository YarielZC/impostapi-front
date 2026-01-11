import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/Login'
import PublicLayout from './layouts/PublicLayout/PublicLayout'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AlreadyLogguedRoute from './components/AlreadyLogguedRoute'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardPage from './pages/DashboardPage/DashboardPage'


function App() {
  return (

    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<HomePage />}></Route>
      
      </Route>
        <Route 
          path='login' 
          element={
            <AlreadyLogguedRoute>
              <LoginPage />
            </AlreadyLogguedRoute>}>
        </Route>
        <Route 
          path='register' 
          element={
            <AlreadyLogguedRoute>
              <RegisterPage />
            </AlreadyLogguedRoute>
          }>
        </Route>
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        >
        </Route>
    </Routes>
  
  )
  
}

export default App
