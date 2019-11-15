import React, { Component } from 'react'

import '../components-styles/ApplicationForm.css'

export default class ApplicationForm extends Component {

    state = {
        newJobApp: {
            status: "",
            company: '',
            contact_name: '',
            contact_method: '',
            date_submitted: '',
        }
    }

    handleChange = property => (e) => {
        const { newJobApp } = this.state
        newJobApp[property] = e.target.value
        this.setState({ newJobApp })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { newJobApp } = this.state
        const {submitForm, toggleForm} = this.props
        submitForm(newJobApp).then(response => {
                if (response) {
                    this.setState({
                        newJobApp: {
                            status: "",
                            company: '',
                            contact_name: '',
                            contact_method: '',
                            date_submitted: '',
                            }
                        })
                    toggleForm()
                }
        })

    }

    render () {
        const { status, company, contact_name, contact_method, date_submitted } = this.state.newJobApp
        return (
            <form className='application-form' onSubmit = {this.handleSubmit}>
                <label>Status</label>
                <input type='text' 
                        value={status}
                        placeholder='yellow'
                        onChange={this.handleChange("status")} 
                        />
                <label>Company</label>
                <input type='text' 
                        value={company}
                        placeholder='some building...'
                        onChange={this.handleChange("company")}
                        />
                <label>Contact Name</label>
                <input type='text' 
                        value={contact_name}
                        placeholder='human'
                        onChange={this.handleChange("contact_name")}
                        />
                <label>Call/Email</label>
                <input type='text' 
                        value={contact_method}
                        placeholder='(000) 000 - 0000'
                        onChange={this.handleChange("contact_method")}
                        />
                <label>Date Submitted</label>
                <input type='calendar' 
                        value={date_submitted}
                        placeholder='Feb 29, 202'
                        onChange={this.handleChange("date_submitted")}
                        />

                <input id='submit-form' type='submit' value='Add Job Application!' />
            </form>
        )
    }
}