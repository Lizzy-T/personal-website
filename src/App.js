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
    user: "",
    user_id: 3,
    isLoginForm: false,
    baseURL: "https://etong-personal-api.herokuapp.com",
    userApplications: [],
    errors: null
  }


  componentDidMount = () => {
    const { baseURL, user_id } = this.state 
    fetch(`${baseURL}/users/${user_id}/applications`)
      .then(response => response.json())
      .then(list => {
        const newList = [...list].reverse()
        this.setState({userApplications: newList})
      })
  }

  toggleLoginForm = () => {
    const { isLoginForm } = this.state 
    this.setState({ isLoginForm: !isLoginForm})
  }

  loginUser = (name) => {
    this.setState({user: name})
    localStorage.setItem("token", name)
  }

  createJobApplication = (listObj) => {
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
            }
        }).catch(errors => {
          const newErrors = errors["message"].split(',')
          this.setState({errors: newErrors})
        })
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
              ? <LoginForm 
                  loginUser={this.loginUser}
                  toggleLoginForm={this.toggleLoginForm}
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
