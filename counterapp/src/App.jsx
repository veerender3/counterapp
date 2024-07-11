import {useState} from 'react'
function App() {
  const [count,setCount] = useState(0);
  const incrementDecrementHandler = (event)=>{
    event.target.innerHTML === "Increment" ? setCount(preval => ++preval) : setCount(preval => --preval);
  }
  return (
    <div className="App">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <div>
          <button onClick={incrementDecrementHandler}>Increment</button>
          <button onClick={incrementDecrementHandler}>Decrement</button>
        </div>
    </div>
  )
}

export default App
