import React, {useState} from 'react'

const App = () => {
  const [num, setnum] = useState("umaima zainab")
  return (
    <div>
      <h1>my name is {num} zainab!!</h1>
    </div>
  )
}


export default App