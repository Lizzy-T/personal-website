import React from 'react'
import {
    Link, 
    scroller
} from 'react-scroll'
import { useHistory } from 'react-router-dom'
import { saveAs } from 'file-saver';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserShield, faFileDownload } from '@fortawesome/free-solid-svg-icons'

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
                
                return response.blob()
            }).then(blob => {
                saveAs(blob, "ETongResume.pdf")
            }) 
            .catch(console.log)
    }

    function handleLogin (e) {
        // scrollTo("home")
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
                    <Link 
                        to='hobbies'
                        onClick={() => scrollTo("hobbies")}
                    >Hobbies</Link>
                    <Link
                        to='contact'
                        onClick={() => scrollTo("contact")}
                    >Contact</Link>
                </nav>
                <div className='img-links'>
                    <a href="https://www.linkedin.com/in/elizabeth-tong-a5851b180">
                        <FontAwesomeIcon
                            className="icon"
                            icon={faLinkedin}
                         />
                    </a>
                    <a href="https://github.com/Lizzy-T">
                        <FontAwesomeIcon
                            className="icon"
                            icon={faGithubSquare}
                        />
                    </a>
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faFileDownload}
                        onClick={downloadResume}
                    />
                    {/* <FontAwesomeIcon 
                        className="icon"
                        icon={faUserShield}
                        onClick={handleLogin}
                    /> */}
                </div>
            </div>
        </header>
    )
} 