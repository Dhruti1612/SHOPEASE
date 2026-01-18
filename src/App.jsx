import { Routes , Route, Navigate } from 'react-router'
import { Homepage } from './pages/Homepage'
import { Checkout } from './pages/Checkout'
import { Orders } from './pages/Orders'
import {Tracking} from './pages/Tracking'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { useAuth } from '../context/AuthContext'

import './App.css'

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route index element={isAuthenticated ? <Homepage /> : <Navigate to="/login" />} />
      <Route path='checkout' element={isAuthenticated ? <Checkout /> : <Navigate to="/login" />} />
      <Route path='orders' element={isAuthenticated ? <Orders /> : <Navigate to="/login" />} />
      <Route path='tracking/:orderId' element={isAuthenticated ? <Tracking /> : <Navigate to="/login" />} />
    </Routes>
  )
}

export default App
