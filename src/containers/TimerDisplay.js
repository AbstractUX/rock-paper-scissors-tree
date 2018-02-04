import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TimerDisplay.css';

class TimerDisplay extends Component {
  render() {
    return (
      <div className='TimerDisplay-display'>
        Time Left: <b>{this.props.timer}</b>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    timer: state.timer
  }
};

export default connect(mapStateToProps)(TimerDisplay);
