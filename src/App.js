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
    isLoginForm: false,
    baseURL: "https://etong-personal-api.herokuapp.com",
  }


  componentDidMount = () => {
    fetch(this.baseURL)
  }

  toggleLoginForm = () => {
    const { isLoginForm } = this.state 
    this.setState({ isLoginForm: !isLoginForm})
  }

  loginUser = (name) => {
    this.setState({user: name})
  }

  render () {
    const { user, isLoginForm, baseURL } = this.state
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
                
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
