import React from 'react'
import {
    Link, 
    scroller
} from 'react-scroll'
import { useHistory } from 'react-router-dom'
import { saveAs } from 'file-saver';

import '../components-styles/NavBar.css'

export default function NavBar ({baseURL, toggleLoginForm, user, ...props}) {
    const scrollTo = (element) => {
        scroller.scrollTo(element, {
          duration: 1000,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }

    const downloadResume = () => {
        fetch(`${baseURL}/download`)
            .then(response => {
                if (response.status > 400) throw new Error("not downloadable")
                console.log(response)
                response.blob()
            }).then(blob => saveAs(blob, "ETongResume.pdf", { autoBom: true })) 
            .catch(console.log)
    }

    function handleLogin (e) {
        toggleLoginForm()
    }

    const history = useHistory()

    function home () {
        const { token } = localStorage
        if (token) { 
            history.push('/')
            localStorage.clear()
        } else {
            scrollTo("home")
        }
    }

    return (
        <header>
            <div>
                <nav className="navbar">
                    <Link 
                        activeclassname="active"
                        to='home'
                        onClick={home}
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
                    <i className="fas fa-sign-in-alt"
                        onClick={handleLogin}
                    ></i>
                </div>
            </div>
        </header>
    )
} 