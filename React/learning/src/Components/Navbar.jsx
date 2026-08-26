import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/login'>Login</Link>
    <Link to='/effects'>Effects</Link>
    <Link to='/counter'>Counter</Link>
    <Link to='/products'>Products</Link>
  </nav>
  )
}

export default Navbar
