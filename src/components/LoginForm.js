import React, { Component } from 'react'
import {
    withRouter
} from 'react-router-dom'

import "../components-styles/LoginForm.css"


class LoginForm extends Component {
    state = {
        name: ''
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const { loginUser, history, toggleLoginForm } = this.props
        const { name } = this.state
        loginUser(name)
        this.setState({name : ""})
        toggleLoginForm()
        history.push('/myapplications')
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    render () {
        const { name } = this.state
        return (
            <form id="login" onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    value= {name}
                    onChange={this.handleChange}
                    />
                <input type='submit' />
            </form>
        )
    }
}

export default withRouter(LoginForm)