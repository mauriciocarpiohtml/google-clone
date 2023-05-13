import { useState } from 'react'
import Navbar from './components/Navbar'
import Resultados from './components/Resultados'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Resultados/>
      </div>
      
    </>
  )
}

export default App
