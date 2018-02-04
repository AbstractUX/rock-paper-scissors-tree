import { combineReducers } from 'redux';
import points from './points';
import computerHand from './computerHand';
import mainDisplay from './mainDisplay';

const rootReducer = combineReducers({
  points,
  computerHand,
  mainDisplay
});

export default rootReducer;
