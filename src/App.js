import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter() {
  const [count,setCount]=useState(0)

  const IncreaseCount=()=> setCount(count+1);
  const DecriaseCount=()=> setCount(count-1);
  
  return (
    <div className="counter">
      <h1>Counter:{count}</h1>
      <button onClick={IncreaseCount}>Increase</button>
      <button onClick={DecriaseCount}>Decrease</button>
    </div>
  );
}

export default App;
