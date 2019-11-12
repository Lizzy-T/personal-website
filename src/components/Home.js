import React from 'react'

import "../components-styles/Home.css"
import liLogo from "../photos/linkedin-52.png"
import gitHub from '../photos/GitHub-Mark-64px.png'


export default function Home () {
    return (
        <div className="home">
            <h1>Elizabeth  Tong</h1>
            <div className="contact">
                <h3>Let's get in touch</h3>
                    <p >
                        <a className="personal-email" 
                        href='mailto:Lizzy.Tong33@gmail.com?subject=Hello - I saw your website... '>
                            Lizzy.Tong33@gmail.com
                        </a>
                        (303) 847-7590
                    </p>
                    <div className='img-links'>
                        <a href="https://www.linkedin.com/in/elizabeth-tong-a5851b180">
                            <img className="liLogo" src={liLogo} alt="linkedIn-profile"/>
                        </a>
                        <a href="https://github.com/Lizzy-T">
                            <img className="githubLogo" src={gitHub} alt="gitHub Repos" />
                        </a>
                    </div>
            </div>
        </div>
    )
}