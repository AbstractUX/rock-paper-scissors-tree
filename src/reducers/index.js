import { combineReducers } from 'redux';
import points from './points';
import computerHand from './computerHand';

const rootReducer = combineReducers({
  points,
  computerHand
});

export default rootReducer;
