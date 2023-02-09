import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <>
      <nav className='navbar navbar-expand-lg position-relative mx-4'>
    <ul className='navbar-nav'>
      <li className='nav-item'>
            <Link className='nav-link fs-5' to='Shows'>Shows</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link fs-5' to=''>Movies</Link>
        </li>
    </ul>
    </nav>

    <Outlet/>


    </>
  )
}

