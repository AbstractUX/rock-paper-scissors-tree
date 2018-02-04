import React, { Component } from 'react';
import logo from './img/tree.jpg';
import './App.css';
import PointsDisplay from './containers/PointsDisplay';
import UserHandButton from './containers/UserHandButton';
import ComputerHand from './containers/ComputerHand';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Welcome to Rock, Paper, Scissors, Tree!</h1>
        <div className="App-user-hand-buttons-container">
          <UserHandButton handImg='rock' />
          <UserHandButton handImg='paper' />
          <UserHandButton handImg='scissors' />
          <UserHandButton handImg='axe' />
        </div>
        <div>
          <h1>Pick the hand that will beat mine</h1>
          <div>
            <ComputerHand />
            <PointsDisplay />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
