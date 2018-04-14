import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Month from '../Month';
import Week from '../Week';
import Days from '../Days';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calendar App</h1>
        </header>

        <div className="App-container">
          <Month />
          <Week />
          <Days />
        </div>
      </div>
    );
  }
}

export default App;
