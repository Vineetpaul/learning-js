import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Your form is submitted')
    console.log({ name })
  }

  const navigate = useNavigate()

  const handleLogin = () =>{
    
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          value={name}
          placeholder="Enter you username"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={handleLogin}>Submit</button>
      </form>
    </div>
  )
}

export default Login
