import React, { useState } from 'react'

const Login = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("") 

     function handleSubmit(event){
        event.preventDefault();
        alert("Your form is submitted")
        console.log({name})

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
      value={name}
       placeholder='Enter you username'
       onChange={(event)=>{setName(event.target.value)}}
       ></input>

      <input 
      value={password} 
      placeholder='Enter your password'
      onChange={(event)=>{setPassword(event.target.value)}}
      ></input>

      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
