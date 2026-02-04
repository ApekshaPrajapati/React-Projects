import { useState } from 'react'

import './App.css'
import Todolistapp from './Todolistapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Todolistapp></Todolistapp>
    </>
  )
}

export default App
