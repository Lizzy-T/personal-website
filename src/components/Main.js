import React from 'react'
import {
    Element
} from 'react-scroll'

import Home from './Home'
import About from './About'
import Resume from './Resume'
import Contact from './Contact'
import Hobbies from './Hobbies'

import "../components-styles/Main.css"


export default function Main (props) {

return( 
    <main>
        <Element name="home">
            <Home />
        </Element>
        <Element name='about'>
            <About />
        </Element>
        <Element name='resume'>
            <Resume />
        </Element>
        <Element name='hobbies'>
            <Hobbies />
        </Element>
        <Element name='contact'>
            <Contact />
        </Element>
    </main>
    )
}