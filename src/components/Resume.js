import React from 'react'
import "../components-styles/Resume.css"


export default function Resume () {

    return (
        <div className='resume'>
            <h2>My Experience</h2>
            <ul>
                <li>
                    <h4>Software Developer</h4>
                    <p>Full stack with experience in Ruby on Rails, React, CSS, and JavaScript.
                    </p>
                </li>
                <li>
                    <h4>Emergency Medical Technician (EMT)</h4>
                    <h5>UCHealth North</h5>
                    <p>Crisis management in fast-paced, high stress situations. Effective leadership, communication, and problem solving 
                        in fast-paced, high-stress environments. Concisely and effectively communicate 
                        with primary paramedic partner, firefighters and law enforcement to coordinate 
                        plan of action and execution while prioritizing first responder safety and 
                        patient care.

                    </p>
                </li>
                <li>
                    <h4>Whitewater Raft Guide</h4>
                    <p>Professionally guided on the Cache le Poudre River for 7 seasons.
                    Managed and coordinated 50 person trips while engaging guests 
                    in a light-hearted, informational, and professional manner. 
                    </p>
                </li>
            </ul>
        </div>
    )
}