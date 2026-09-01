import { useContext } from 'react'
import UserContext from './UserContext'

const Profile = () => {

  const user = useContext(UserContext);


  return (
    <div>
      <h1>HI {user.name} your age = {user.age}</h1>
      
    </div>
  )
}

export default Profile
