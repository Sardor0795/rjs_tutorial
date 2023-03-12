import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='navList'>
            <li className='navItem'><NavLink to={'/home'}>Logo</NavLink></li>
            <li className='navItem'><NavLink to={'/menu'}>Menu</NavLink></li>
            <li className='navItem'><NavLink to={'/comp'}>Comp</NavLink></li>
            <li className='navItem'><NavLink to={'/support'}>Support</NavLink></li>
        </ul>
    </div>
  )
}
