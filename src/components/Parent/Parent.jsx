import React from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../Footer/Footer'
import Navbar from '../navbar/Navbar'

export default function Parent() {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}
