import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import UserTable from './components/UserTable'
import UserRoute from './routes/UserRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <UserRoute/>
    </>
  )
}

export default App
