import { useState } from 'react'

const AuthDemo = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')
  const [token, setToken] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const register = async () => {
    const response = await fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    const data = await response.json()
    setMessage(data.message)
  }

  const login = async () => {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: form.email, password: form.password }),
    })

    const data = await response.json()
    setMessage(data.message)
    setToken(data.token || '')
  }

  const profile = async () => {
    const response = await fetch('http://localhost:5000/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()
    setMessage(data.message)
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Auth Demo</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />

      <button onClick={register} style={{ marginRight: '10px' }}>Register</button>
      <button onClick={login} style={{ marginRight: '10px' }}>Login</button>
      <button onClick={profile}>Profile</button>

      <p>{message}</p>
      {token && <p>Token: {token}</p>}
    </div>
  )
}

export default AuthDemo
