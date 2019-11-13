import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom"

import Main from './components/Main'
import NavBar from './components/NavBar'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Main />
      </Router>
    </div>
  );
}

export default App;
