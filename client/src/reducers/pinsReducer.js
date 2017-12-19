import {
  CREATE_PIN,
  FETCH_PINS,
  EDIT_PIN,
} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_PIN:
      return [ { ...action.payload }, ...state ];
    case EDIT_PIN:
      return [ { ...action.payload }, ...state.filter(p => p._id !== action.payload._id) ]
    case FETCH_PINS:
      return [ ...action.payload ];
    default:
      return state;
  }
}
