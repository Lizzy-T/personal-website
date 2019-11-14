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
    userApplications: []
  }


  componentDidMount = () => {
    const { baseURL, user_id } = this.state 
    fetch(`${baseURL}/users/${user_id}/applications`)
      .then(response => response.json())
      .then(list => {
        this.setState({userApplications: [list]})
      })
  }

  toggleLoginForm = () => {
    const { isLoginForm } = this.state 
    this.setState({ isLoginForm: !isLoginForm})
  }

  loginUser = (name) => {
    this.setState({user: name})
  }

  render () {
    const { isLoginForm, baseURL, userApplications } = this.state
    return (
      <div className="App">
        <Router>
          <NavBar 
            baseURL={baseURL} 
            toggleLoginForm={this.toggleLoginForm}
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
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
