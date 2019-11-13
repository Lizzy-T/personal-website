import React from 'react'
import {
    Link, 
    animateScroll as scroll, 
    scroller
} from 'react-scroll'

import gitHub from '../photos/GitHub-Mark-64px.png'

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
        <header>
            <nav className="navbar">
                <Link 
                    activeClassName="active"
                    onClick={() => scrollTo("home")}
                >Home</Link>
                <Link 
                    activeClassName="active"
                    onClick={() => scrollTo("about")}
                >About</Link>
                <Link 
                    activeClassName="active"
                    onClick={() => scrollTo("resume")}
                >Resume</Link>
            </nav>
            <div className='img-links'>
                <a href="https://www.linkedin.com/in/elizabeth-tong-a5851b180">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Lizzy-T">
                    <i class="fab fa-github-square"></i>
                </a>
                <i class="fas fa-file-alt"></i>
            </div>
        </header>
    )
} 