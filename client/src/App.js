import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="What-we-do-section">
          <h1>What we do</h1>
        </div>
        <div className="About-section">
          <h1>About</h1>
        </div>
        <div className="Contact-section">
          <h1>Contact</h1>
        </div>
      </div>
    );
  }
}

export default App;
