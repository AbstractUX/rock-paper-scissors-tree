import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPoint, changeComputerHand, loseGame } from '../actions/index';
import './UserHandButton.css';
import rock from '../img/rock.png';
import paper from '../img/paper.png';
import scissors from '../img/scissors.png';
import axe from '../img/axe.png';

let handImg = null;

class UserHandButton extends Component {
  constructor(props) {
    super(props);

    this.checkIfWinHand = this.checkIfWinHand.bind(this);
    this.winHand = this.winHand.bind(this);
    this.loseHand = this.loseHand.bind(this);
    this.generateRandomComputerHand = this.generateRandomComputerHand.bind(this);
  }

  checkIfWinHand() {
    let computerHand = this.props.computerHand;
    let userHand = this.props.handImg;
    let winHand = false;

    switch (computerHand) {
      case 'rock':
        winHand = userHand === 'paper' ? true : false;
        break;
      case 'paper':
        winHand = userHand === 'scissors' ? true : false;
        break;
      case 'scissors':
        winHand = userHand === 'rock' ? true : false;
        break;
      case 'tree':
        winHand = userHand === 'axe' ? true : false;
        break;
    }
    winHand ? this.winHand() : this.loseHand();
  }

  generateRandomComputerHand() {
    let randomVal = Math.random();
    if (randomVal < 0.25) {
      this.props.changeComputerHand('rock');
    } else if (randomVal < 0.50) {
      this.props.changeComputerHand('paper');
    } else if (randomVal < 0.75) {
      this.props.changeComputerHand('scissors');
    } else {
      this.props.changeComputerHand('tree');
    }
  }

  winHand() {
    console.log('win hand');
    this.props.addPoint();
    this.generateRandomComputerHand();
  }

  loseHand() {
    console.log('lose hand');
    clearInterval(this.props.timerFunction);
    this.props.loseGame();
  }

  renderHandImages() {
    switch (this.props.handImg) {
      case 'rock':
        handImg = rock;
        break;
      case 'paper':
        handImg = paper;
        break;
      case 'scissors':
        handImg = scissors;
        break;
      case 'axe':
        handImg = axe;
        break;
    }
  }

  render() {
      this.renderHandImages();
      return (
      <div>
        <img className='UserHandButton-button' src={handImg} onClick={this.checkIfWinHand}></img>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    computerHand: state.computerHand
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPoint,
    changeComputerHand,
    loseGame
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHandButton);
