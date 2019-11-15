import React, { Component } from 'react'

import AppListing from './AppListing'
import ApplicationForm from './ApplicationForm'

import '../components-styles/Myapplications.css'

export default class Myapplications extends Component {

    state = {
        isFormShowing: false
    }

    componentDidMount = () => {
        console.log("local storage my apps", localStorage.token)
        const { fetchUserApplications } = this.props
        const id = localStorage.token
        fetchUserApplications(id)
    }

    showList = () => {
        const { userApplications } = this.props
        if (userApplications.length < 1) return 
        return userApplications.map(listing => {
            return (
                <li key={listing.id}>
                    <AppListing {...listing} />
                </li>
            )})
    }

    toggleForm = () => {
        const { isFormShowing } = this.state
        this.setState({ isFormShowing: !isFormShowing})
    }

    handleClick = () => {
        this.toggleForm()
    }

    renderErrors = (errors) => {
        return errors.map(error => <p className='error'>{error}</p> )
    }

    render () {
        const { createJobApplication, errors } = this.props
        const { isFormShowing } = this.state
        return (
            <div className="my-apps">
                <h1>My Job Applications
                <i className="fas fa-plus-square" onClick={this.handleClick}></i>
                </h1>
                {
                    isFormShowing
                    ? <ApplicationForm 
                        submitForm={createJobApplication}
                        toggleForm={this.toggleForm}
                    />
                    :null
                }
                {
                    errors
                    ?   <div className="error-box">
                            {this.renderErrors(errors)}
                        </div>
                    :null
                }
                <div className='label-container'>
                    <label>Status</label>
                    <label>Company</label>
                    <label>Contact Name</label>
                    <label>Call/Email</label>
                    <label>Date Submitted</label>
                    <label>Followed Up?</label>
                    <label >Interview</label>
                </div>

                <ul id='info'>
                    {this.showList()}
                </ul>
                <div className='footer-filler'></div>
            </div>
        )
    }
}