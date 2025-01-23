import { DECREASE, INCREASE, SET_COLOR } from '../action-creators/types';
import { combineReducers } from 'redux';

// Can not return undefined
// Can not mutate state
// Pure function
function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

function colorReducer(state = 'blue', action) {
  switch (action.type) {
    case SET_COLOR:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  counter: counterReducer,
  color: colorReducer
});
