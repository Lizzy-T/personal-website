import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Main from './components/Main'
import NavBar from './components/NavBar'
import Myapplications from './components/Myapplications'
import LoginForm from './components/LoginForm'

import './App.css';

class App extends Component {
  state = {
    user_id: 0,
    isLoginForm: false,
    baseURL: "https://etong-personal-api.herokuapp.com",
    userApplications: [],
    errors: null
  }

  componentDidMount = () => {
    fetch(baseURL)
  }

  fetchUserApplications = (id) => {    
    const { baseURL } = this.state
    this.setState({user_id: localStorage.token})
    if (id > 0 ) {
      fetch(`${baseURL}/users/${id}/applications`)
        .then(response => response.json())
        .then(list => {
          const newList = [...list].reverse()
          this.setState({userApplications: newList})
        })
    }
  }

  toggleLoginForm = () => {
    const { isLoginForm } = this.state 
    this.setState({ isLoginForm: !isLoginForm})
  }

  loginUser = ({username, password}) => {
    const { baseURL } = this.state
    this.resetErrors()
    return fetch(`${baseURL}/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({username, password})
    }).then(response => response.json())
    .then(data => {
      if (data.error) {
        this.setState({errors: data.error})
        throw new Error(data.error)
      } else {
        const { id } = data
        this.setState({user_id: id})
        localStorage.setItem("token", id)
        return data
      }})
  }

  createJobApplication = (listObj) => {
    this.resetErrors()
    const { baseURL, user_id } = this.state 
    return fetch(`${baseURL}/users/${user_id}/applications`, {
        method: "POST",
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify(listObj)
    }).then(response => {
            if (response.status > 400) throw new Error ('uh oh')
            return response.json()
        }).then(response => {
            if (response.errors) {
                throw new Error(response.errors)
            } else {
              const {userApplications} = this.state
              this.setState({ userApplications: [response, ...userApplications]})
              return response
            }
        }).catch(errors => {
          const newErrors = errors["message"].split(',')
          this.setState({errors: newErrors})
        })
}

resetErrors = () => {
  this.setState({errors: null})
}

  render () {
    const { isLoginForm, baseURL, userApplications, user_id, errors, user } = this.state
    return (
      <div className="App">
        <Router>
          <NavBar 
            baseURL={baseURL} 
            toggleLoginForm={this.toggleLoginForm}
            user={user}
            />
            {
              isLoginForm
              ? 
                  <LoginForm 
                  loginUser={this.loginUser}
                  toggleLoginForm={this.toggleLoginForm}
                  error={errors}
                  resetErrors={this.resetErrors}
                />
              : null
            }
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/myapplications' >
              <Myapplications 
                userApplications={userApplications}
                baseURL={baseURL}
                user_id={user_id}
                createJobApplication={this.createJobApplication}
                fetchUserApplications={this.fetchUserApplications}
                errors={errors}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
