import { useEffect, useState } from 'react'

const Effects = () => {

    const [users, setUser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data=>{
            setUser(data)
        })
    },[])

  return (
    <div>
      {users.map(user=>(
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  )
}

export default Effects

