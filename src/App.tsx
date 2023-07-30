import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import User from './pages/User'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
