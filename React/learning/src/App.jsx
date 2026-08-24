import { useState } from 'react'
import Greet from './Greet'
import Counter from "./Counter"
import Login from './Pages/Login'
import Effects from './Components/Effects'

const App = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false)


  const user = {
    name: "Vineet",
    age: 21
  }
  function handleClick() {
    console.log("You just click a button")
  }
  return (
    <div>
      {/* <Greet name="Vineet" age={21} />
      <Greet name="Aman" age={24} />
      <Greet name="Sourabh" age={22} /> */}
      <Greet user={user} onClick={handleClick} />
      <Counter />
      {/* {isLoggedIn ? <Login /> : alert("Please login first")} */}
      {!isloggedIn && <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      {isloggedIn && <Login />}
      {isloggedIn && <div>Welcome</div>}

      <Effects />


    </div>
  )
}

export default App
