import React from 'react'

import InterviewListing from './InterviewListing'

import '../components-styles/AppListing.css'

export default function AppListing ({
    company, 
    contact_method, 
    contact_name, 
    date_submitted, 
    follow_up, 
    status, 
    interviews }) {
    
    const renderInterviews = () => {
        return interviews.map(listing => < InterviewListing {...listing} key={listing.id}/>)
    }

    const interviewHolder = () => {
        return (
            <div>

            </div>
        )
    }

    return (
        <div className="listing">
            <p className={status} >{status}</p>
            <p>{company}</p>
            <p>{contact_name}e</p>
            <p>{contact_method}</p>
            <p>{date_submitted}</p>
            <input type='checkbox' checked={follow_up} />
            { interviews 
                ? renderInterviews() 
                : interviewHolder()
                }
            <div className='icon-box'>
                <i className="fas fa-calendar-plus"></i>
                <i className="fas fa-pen-square"></i>
            </div>
        </div>
    )
}