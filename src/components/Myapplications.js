import React from 'react'

import AppListing from './AppListing'

import '../components-styles/Myapplications.css'

export default function Myapplications ({userApplications}) {

    const showList = () => {
        if (userApplications < 1) return 
        userApplications = userApplications[0]
        return userApplications.map(listing => {
            return (
                <li key={listing.id}>
                    <AppListing {...listing} />
                </li>
            )})
    }

        return (
            <div className="my-apps">
                <h1>My Job Applications
                <i className="fas fa-plus-square"></i>
                </h1>
                    <label>Status</label>
                    <label>Company</label>
                    <label>Contact Name</label>
                    <label>Call/Email</label>
                    <label>Date Submitted</label>
                    <label>Follow Up</label>
                    <label >Interview</label>
                    <ul id='info'>
                        {showList()}
                    </ul>
                    <label>Edit/Add</label>
                <div className='footer-filler'></div>
            </div>
        )
}