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
    <Link to='/context'>Context</Link>
    <Link to='/profile'>Profile</Link>
    <Link to='/refhook'>Refhook</Link>
  </nav>
  )
}

export default Navbar
