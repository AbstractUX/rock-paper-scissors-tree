import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PointsDisplay.css';

class PointsDisplay extends Component {
  render() {
    return (
      <div className='PointsDisplay-display'>
        Points: <b>{this.props.points}</b>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    points: state.points
  }
};

export default connect(mapStateToProps)(PointsDisplay);
