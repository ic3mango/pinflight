import {
  CREATE_PIN,
  FETCH_PINS
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_PIN:
      return [...state, action.payload];
    case FETCH_PINS:
      return [...action.payload];
    default:
      return state;
  }
}
