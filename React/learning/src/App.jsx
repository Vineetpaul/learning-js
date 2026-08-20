import React from 'react'
import Greet from './Greet'
import Counter from "./Counter"

const App = () => {
  const user = {
    name:"Vineet",
    age:21
  }
  function handleClick(){
    console.log("You just click a button")
  }
  return (
    <div>
      {/* <Greet name="Vineet" age={21} />
      <Greet name="Aman" age={24} />
      <Greet name="Sourabh" age={22} /> */}
      <Greet user={user} onClick={handleClick}/>
      <Counter />
    </div>
  )
}

export default App
