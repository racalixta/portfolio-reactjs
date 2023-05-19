import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Header'
import { Footer } from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

export default App
