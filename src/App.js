import React, { Component } from 'react';
import logo from './img/tree.jpg';
import './App.css';
import PointsDisplay from './containers/PointsDisplay';
import UserHandButton from './containers/UserHandButton';
import ComputerHand from './containers/ComputerHand';
import { connect } from 'react-redux';

let mainDisplay = null;

class App extends Component {
  chooseMainDisplay() {
      console.log(this.props.mainDisplay);
      if (this.props.mainDisplay === 'gameStarted') {
        mainDisplay = (<div>
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
      </div>)
    } else if (this.props.mainDisplay === 'lostGame') {
      mainDisplay = <div>
        <h1>GAME OVER!</h1>
        <strong><p>You picked the wrong hand!</p></strong>
        <strong><p>Your Final Score is: {this.props.points}</p></strong>
        <button onClick={() => {window.location.reload(false);}}>PLAY AGAIN!</button>
    </div>
    }
  }

  render() {
    this.chooseMainDisplay();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Welcome to Rock, Paper, Scissors, Tree!</h1>
        {mainDisplay}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      mainDisplay: state.mainDisplay,
      points: state.points
    }
}

export default connect(mapStateToProps)(App);
