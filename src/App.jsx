import React, {useState} from 'react'

const App = () => {
  const [num, setnum] = useState("umaima")
  const [use, setuse] = useState("30")
  function changename(){
     setuse("not 30")
     setnum("not umaima")
  }
  return (
    <div>
      <h1>my name is {num} zainab!! <br /> my age is {use}</h1>
      <button onClick={changename}>Click here!!</button>
    </div>
  )
}


export default App