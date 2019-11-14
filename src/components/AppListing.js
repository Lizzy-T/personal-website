import React from 'react'

import InterviewListing from './InterviewListing'

import '../components-styles/AppListing.css'

export default function AppListing ({company, contact_method, contact_name, date_submitted, follow_up, status, interviews }) {
    const renderInterviews = () => {
        console.log(interviews)
        return interviews.map(listing => <InterviewListing {...listing} />)
    }
    
    return (
        <div className="listing">
            <p className="status">{status}</p>
            <p className="company">{company}</p>
            <p className='contact-name'>{contact_name}e</p>
            <p className='contact-method'>{contact_method}</p>
            <p className='date'>{date_submitted}</p>
            <p className='follow'>{follow_up}</p>
            {renderInterviews()}
        </div>
    )
}