import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">
            Home
        </Link>
        <Link to="/add-course">
            Add Course
        </Link>
    </div>
  )
}

export default Navbar