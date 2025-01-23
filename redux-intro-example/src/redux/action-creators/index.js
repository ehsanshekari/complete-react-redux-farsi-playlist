import { INCREASE, DECREASE, SET_COLOR } from './types';

// action creator
export const increase = () => {
  // action
  return {
    type: INCREASE,
    // payload
  };
};

// action creator
export const decrease = () => {
  // action
  return {
    type: DECREASE,
    // payload
  };
};

// action creator
export const setColor = (color) => {
  // action
  return {
    type: SET_COLOR,
    payload: color,
  };
};
