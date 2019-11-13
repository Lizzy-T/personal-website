import React from 'react'
import {
    Link, 
    Events, 
    animateScroll as scroll, 
    scroller
} from 'react-scroll'

import liLogo from "../photos/linkedin-52.png"
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
            <nav id="navbar">
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
                    <img className="liLogo" src={liLogo} alt="linkedIn-profile"/>
                </a>
                <a href="https://github.com/Lizzy-T">
                    <img className="githubLogo" src={gitHub} alt="gitHub Repos" />
                </a>
            </div>
        </header>
    )
} 