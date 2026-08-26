import { useState } from 'react'
import Greet from './Greet'
import Counter from './Counter'
import Login from './Pages/Login'
import Effects from './Components/Effects'
import Productapicall from './Components/Productapicall'
import Navbar from './Components/Navbar'
import ProtectedRoute from './Routes/ProtectedRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notfound from './Pages/Notfound'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const user = {
    name: 'Vineet',
    age: 21,
  }

  const handleClick = () => {
    console.log('You just clicked a button')
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<ProtectedRoute isAuthenticated={isLoggedIn}><Greet user={user} onClick={handleClick} /> </ProtectedRoute>} />
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
              ) : (
                <>
                  <Login />
                  <div>Welcome</div>
                </>
              )
            }
          />
          <Route path="/effects" element={<ProtectedRoute isAuthenticated={isLoggedIn}><Effects /></ProtectedRoute>} />
          <Route path="/products/:id" element={<Productapicall />} />
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
