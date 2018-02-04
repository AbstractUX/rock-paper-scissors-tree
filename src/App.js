import React, { Component } from 'react';
import logo from './img/tree.jpg';
import './App.css';
import PointsDisplay from './containers/PointsDisplay';
import UserHandButton from './containers/UserHandButton';
import ComputerHand from './containers/ComputerHand';
import TimerDisplay from './containers/TimerDisplay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { countDown, timesUp } from './actions/index';

let mainDisplay = null;
let timerFunction = null;

class App extends Component {
  constructor(props) {
    super(props);

    this.checkIfTimesUp = this.checkIfTimesUp.bind(this);
  }

  componentDidMount() {
    timerFunction = setInterval(() => { this.props.countDown() }, 1000);
  }

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
            <TimerDisplay />
          </div>
        </div>
      </div>)
    } else if (this.props.mainDisplay === 'lostGame') {
      mainDisplay = <div>
        <h1>GAME OVER!</h1>
        <strong><p>You picked the wrong hand!</p></strong>
        <h3>Your Final Score is: {this.props.points}</h3>
        <p>Taking a short break? Check out this <a href="http://amzn.to/2E0dnJk">Rock Paper Scissors book</a> on amazon.</p>
        <button onClick={() => {window.location.reload(false);}}>PLAY AGAIN!</button>
    </div>
    } else if (this.props.mainDisplay === 'timesUp') {
      mainDisplay = <div>
        <h1>TIME'S UP!</h1>
        <strong><p>You're pretty good at this aren't you?</p></strong>
        <h3>Your Final Score is: {this.props.points}</h3>
        <p>Taking a short break? Check out this <a href="http://amzn.to/2E0dnJk">Rock Paper Scissors book</a> on amazon.</p>
        <button onClick={() => {window.location.reload(false);}}>PLAY AGAIN!</button>
    </div>
    }
  }

  checkIfTimesUp() {
    if (this.props.timer <= 0) {
      console.log('times up triggered');
      clearInterval(timerFunction);
      this.props.timesUp();
    }
  }

  render() {
    this.chooseMainDisplay();
    this.checkIfTimesUp();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Welcome to Rock, Paper, Scissors, Tree!</h1>
        {mainDisplay}
        <footer>
          <p>We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.</p>
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      mainDisplay: state.mainDisplay,
      points: state.points,
      timer: state.timer
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    countDown,
    timesUp
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
