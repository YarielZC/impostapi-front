import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/Login'
import PublicLayout from './layouts/PublicLayout/PublicLayout'
import RegisterPage from './pages/RegisterPage/RegisterPage'



function App() {
  return (

    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<HomePage />}></Route>
      
      </Route>
      
      <Route path='login' element={<LoginPage />}></Route>
      <Route path='register' element={<RegisterPage />}></Route>
    </Routes>
  
  )
  
}

export default App
