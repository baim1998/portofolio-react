import { useState } from 'react'
import './App.css'
import Home from './component/home'
import './component/home.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
    </>
  )
}

export default App