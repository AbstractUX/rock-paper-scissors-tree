import React, { Component } from 'react';
import { connect } from 'react-redux';
import rock from '../img/rock.png';
import paper from '../img/paper.png';
import scissors from '../img/scissors.png';
import tree from '../img/tree.jpg';
import './ComputerHand.css';

let computerHandImg = null;

class ComputerHand extends Component {
  updateComputerHandImg() {
    switch (this.props.computerHand) {
      case 'rock':
        computerHandImg = rock;
        break;
      case 'paper':
        computerHandImg = paper;
        break;
      case 'scissors':
        computerHandImg = scissors;
        break;
      case 'tree':
        computerHandImg = tree;
        break;
    }
  }

  render() {
    this.updateComputerHandImg();
    return (
      <div>
        <img className='ComputerHand-hand' src={computerHandImg}></img>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    computerHand: state.computerHand
  }
}

export default connect(mapStateToProps)(ComputerHand);
