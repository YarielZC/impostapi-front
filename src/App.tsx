import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/Login'
import PublicLayout from './layouts/PublicLayout/PublicLayout'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AlreadyLogguedRoute from './components/AlreadyLogguedRoute'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import SettingsPage from './pages/SettingsPage/SettingsPage'


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
        <Route path='/' element={<DashboardLayout />}>
          <Route
            path='dashboard'
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          >
          </Route>
          <Route
            path='dashboard/projects'
            element={
              <ProtectedRoute>
                <ProjectsPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path='dashboard/settings'
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          ></Route>
        </Route>
    </Routes>
  
  )
  
}

export default App
