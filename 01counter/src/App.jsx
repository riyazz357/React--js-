import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue = () => {
    console.log("clicked")
    count=count+1;
    setCount(count);
  }
  const removeValue = () => {
    console.log("clicked")
    count=count-1;
    if(count<0){
      count=0;
    }
    setCount(count);
  }
  return (
    <>
      <h1>My first react basic project</h1>
      <h2>counter value: {count}</h2>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
