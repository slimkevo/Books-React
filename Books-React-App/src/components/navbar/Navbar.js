import React from 'react'
import {ImBooks} from 'react-icons/im'
import {CgWebsite} from 'react-icons/cg'
import { IoMenu } from "react-icons/io5"

import './NavbarStyles.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <h2>My Favorite Books</h2>
        </div>
        
        <div className="nav-icons">
            <ImBooks className='icon' />
            <CgWebsite className='icon' />
        </div>
        <div className="hamburger">
            <IoMenu className='icon' />
        </div>
    </div>
  )
}

export default Navbar