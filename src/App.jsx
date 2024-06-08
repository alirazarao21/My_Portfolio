import { useState } from 'react'
import { Nav } from './components/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Nav />
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
   </>
  )
}

export default App
