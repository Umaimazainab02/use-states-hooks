import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(1)
  function increase() {
    setnum(num + 1)
  }
  function decrease() {
    setnum(num - 1)
  }
  function jump(){
    setnum(num + 5)
  }
  function del(){
    setnum(num - num)
  }
  return (
    <div>
      <h1>{num}</h1>
      <div className='btn'>
        <button onClick={increase}>Increase </button>
        <button onClick={decrease}>decrease</button>
        <button onClick={jump}>increase by 5</button>
        <button onClick={del}>delete</button>

      </div>  
      </div>
  )
}


export default App