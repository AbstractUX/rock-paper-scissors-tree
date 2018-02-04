import { combineReducers } from 'redux';
import points from './points';
import computerHand from './computerHand';
import mainDisplay from './mainDisplay';
import timer from './timer';

const rootReducer = combineReducers({
  points,
  computerHand,
  mainDisplay,
  timer
});

export default rootReducer;
