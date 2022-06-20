import React from 'react'
import {useState} from "react"
const Counter = () => {
    const [counter, setCounter] = useState(0)
    const counterDecHandler = ()=>{
        setCounter(counter + 1)
    }
    const counterIncHandler = ()=>{
        if(counter>0){
            setCounter(counter-1)
        }
    }
    const counterStartHandler = ()=>{
        setCounter(0)
    }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={counterIncHandler}>Prev</button>
      <button onClick={counterStartHandler}>Start</button>
      <button onClick={counterDecHandler}>Next</button>
    </div>
  );
}

export default Counter