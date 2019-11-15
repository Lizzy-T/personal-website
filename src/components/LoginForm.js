import React, { Component } from 'react'
import {
    withRouter
} from 'react-router-dom'


import "../components-styles/LoginForm.css"


class LoginForm extends Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    }

    componentDidMount = () => {
        const { resetErrors } = this.props
        resetErrors()
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const { loginUser, history, toggleLoginForm } = this.props
        const { user } = this.state
        loginUser(user).then( data => {
                this.setState({
                    username : "",
                    password: ""
                })
                history.push('/myapplications')
                toggleLoginForm()
            }).catch(console.log)
    }

    handleChange = property => (e) => {
        const { user } = this.state 
        user[property] = e.target.value
        this.setState({user})
    }


    render () {
        const { username, password } = this.state.user
        const { error } = this.props

        return (
            <div id='login-container'>
            <form id="login" onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    value= {username}
                    placeholder="username"
                    onChange={this.handleChange('username')}
                    />
                <input 
                    type='password' 
                    value= {password}
                    placeholder="password"
                    onChange={this.handleChange('password')}
                    />
                <input type='submit' />
            </form>
                {
                    error
                    ?   <div className="login-error-box">
                            <p className='login-error'>*{error}*</p>
                        </div>
                    :null
                }
            </div>
        )
    }
}

export default withRouter(LoginForm)