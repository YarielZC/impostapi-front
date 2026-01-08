import './App.css'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import PublicLayout from './layouts/PublicLayout/PublicLayout'



function App() {
  return (

    <Routes>
      <Route path='/' element={<PublicLayout />}>
        <Route index element={<HomePage />}></Route>
      
      </Route>
    </Routes>
  
  )
  
}

export default App
