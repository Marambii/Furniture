import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
function Display() {
  return (
    <div>
    <Navbar ></Navbar>

    <div className='' style={{"min-height":"80vh"}} >
    <Outlet  />
    </div>

    <Footer></Footer>
    </div>
  )
}

export default Display