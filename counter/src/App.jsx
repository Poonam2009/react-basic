import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)

  const addValue = () => {
    setCount(counter + 1);
    setCount(counter + 1);
    setCount(counter + 1);
    setCount(counter + 1);

    /* To fix the issue of batching in React, you should use 
    the functional form of setCount to ensure each update is 
    based on the previous state. */
    
    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)
    setCount((prevCounter) => prevCounter + 1)

  }

  const removeValue = () => {
    setCount(counter - 1);
  }

  return (
    <>
     <h1>React Course</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add Value</button> {" "}
     <button onClick={removeValue}>Remove Value</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
