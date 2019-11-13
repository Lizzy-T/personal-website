import React from 'react'
import {
    Link, 
    animateScroll as scroll, 
    scroller
} from 'react-scroll'
import { saveAs } from 'file-saver';

import '../components-styles/NavBar.css'

export default function NavBar () {
    
    const scrollTo = (element) => {
        scroller.scrollTo(element, {
          duration: 1000,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }

    const downloadResume = () => {
        fetch("http://localhost:3000/download")
            .then(response => response.blob())
            .then(blob => saveAs(blob, "ETongResume.pdf", { autoBom: true }))
    }

    return (
        <header>
            <nav className="navbar">
                <Link 
                    activeclassname="active"
                    to='home'
                    onClick={() => scrollTo("home")}
                >Home</Link>
                <Link 
                    to='about'
                    activeclassname="active"
                    onClick={() => scrollTo("about")}
                >About</Link>
                <Link 
                    to='resume'
                    activeclassname="active"
                    onClick={() => scrollTo("resume")}
                >Resume</Link>
            </nav>
            <div className='img-links'>
                <a href="https://www.linkedin.com/in/elizabeth-tong-a5851b180">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/Lizzy-T">
                    <i className="fab fa-github-square"></i>
                </a>
                <i className="fas fa-file-alt" 
                    onClick={downloadResume}
                ></i>
            </div>
        </header>
    )
} 