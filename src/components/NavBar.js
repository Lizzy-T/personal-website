import React from 'react'
import {
    NavLink
} from 'react-router-dom'

import '../components-styles/NavBar.css'

export default function NavBar () {
    return (
        <nav id="navbar">
            <NavLink 
                activeClassName="active"
                exact to='/'
            >Home</NavLink>
            <NavLink 
                
                activeClassName="active"
                exact to='/about'
            >About</NavLink>
            <NavLink 
                activeClassName="active"
                to='/resume'
            >Resume</NavLink>
        </nav>
    )
} 