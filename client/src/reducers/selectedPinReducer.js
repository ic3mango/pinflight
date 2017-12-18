import {
  FETCH_PIN,
  CLEAR_PIN,
  SET_ACTIVE_PIN,
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_PIN:
    case SET_ACTIVE_PIN:
      return { ...action.payload };
    case CLEAR_PIN:
      return null;
    default:
      return state;
  }
}
