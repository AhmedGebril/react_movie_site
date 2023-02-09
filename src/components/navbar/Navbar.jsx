import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light position-relative">
    <Link className="navbar-brand"to="">Movies</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item active">
          <Link to="" className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to ="about" className='nav-link'>Movies</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}
