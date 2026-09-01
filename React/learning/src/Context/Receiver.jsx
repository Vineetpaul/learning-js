import { useContext } from 'react'
import UserContext from './UserContext'

const Receiver = () => {

  const user = useContext(UserContext);


  return (
    <div>
      <h1>Vale provided by parent App.jsx is = {user.name} and age = {user.age}</h1>
      
    </div>
  )
}

export default Receiver
