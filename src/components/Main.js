import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Resume from './Resume'

import "../components-styles/Main.css"


export default function Main (props) {

return( 
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path='/resume' component={Resume} />
    </Switch>
    )
}