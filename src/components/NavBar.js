import React from 'react'
import {
    Link, 
    Events, 
    animateScroll as scroll, 
    scroller
} from 'react-scroll'

import '../components-styles/NavBar.css'

export default function NavBar () {
    const scrollToTop = () => {
        scroll.scrollToTop()
      }
    
    const scrollTo = (element) => {
        scroller.scrollTo(element, {
          duration: 1000,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }

    return (
        <nav id="navbar">
            <Link 
                activeClassName="active"
                exact to='/'
                onClick={() => scrollTo("home")}
            >Home</Link>
            <Link 
                activeClassName="active"
                exact to='/about'
                onClick={() => scrollTo("about")}
            >About</Link>
            <Link 
                activeClassName="active"
                to='/resume'
                onClick={() => scrollTo("resume")}
            >Resume</Link>
        </nav>
    )
} 