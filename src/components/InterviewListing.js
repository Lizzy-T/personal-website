import React from 'react'

import '../components-styles/InterviewListing.css'

export default function InterviewListing ({method, date}) {
    return (
        <div className='interview-list'>
            <p className='interview-type'>{method}</p>
            <p className='interview-date'>{date}</p>
        </div>
    )
}