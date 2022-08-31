import React from 'react'
import { useState } from 'react'
import './counter.css'

const Counter = () => {
  let [num, setNum] = useState(1)

  const increment = () => {
    if (num <= 1000) {
      setNum(num + 1)
    }
  }

  const decrement = () => {
    if (num > 1) {
      setNum(num - 1)
    }
  }

  return (
    <>
      <div className="container">
        <button id="btn1" onClick={decrement}>
          -
        </button>
        <h1>{num}</h1>

        <button id="btn2" onClick={increment}>
          +
        </button>
      </div>
    </>
  )
}

export default Counter
