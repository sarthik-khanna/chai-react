import {useState} from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [counter,setCounter] =useState(15)
// let counter =15;
const addValue =()=>{
  console.log("clicked",counter)
// counter = counter+1;
setCounter(counter+1)
}
const removeValue =()=>{
  setCounter(counter-1)
  console.log("clicked",counter)
}
  return (
    <div>
   <h1>chai aur react</h1>
<h2>value :15{setCounter}</h2>
<button onClick={addValue}>Add value{counter}</button>
<br/>
<button onClick={removeValue}>remove value</button>
</div>
  )
}

export default App
