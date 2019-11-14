import React, { Component } from 'react'

import AppListing from './AppListing'

import '../components-styles/Myapplications.css'

export default class Myapplications extends Component {
    state = {
        appList: [        
            {company: "test",
            contact_method: "phone",
            contact_name: "testing",
            date_submitted: "8-8-2000",
            follow_up: true,
            id: 2,
            interviews: [
                {id: 2, method: "phone", date: "8-01-2000", application_id: 2}
                ],
            status: "yellow",
            user_id: 2}]
    }

    showList = () => {
        let {userApplications} = this.props
        if (userApplications < 1) return 
        userApplications = userApplications[0]
        return userApplications.map(listing => {
            return (
                <li>
                    <AppListing {...listing} />
                </li>
            )})
    }

    render () {
        return (
            <div className="my-apps">
                <h1>My Job Applications</h1>
                    <label>Status</label>
                    <label>Company</label>
                    <label>Contact Name</label>
                    <label>Call/Email</label>
                    <label>Date Submitted</label>
                    <label>Follow Up</label>
                    <label >Interview</label>
                    <ul id='info'>
                        {this.showList()}
                    </ul>
                <div className='footer-filler'></div>
            </div>
        )
    }
}