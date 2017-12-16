import {
  CREATE_PIN,
  FETCH_PINS,
  FETCH_PIN,
  EDIT_PIN
} from '../actions/types';

const defaultState = {
  allPins: [],
  selectedPin: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_PIN:
      return { ...state, allPins: state.allPins.push(action.payload) };
    case EDIT_PIN:
      return { ...state, allPins: [...state.allPins.filter(p => p._id !== action.payload._id), action.payload ]}
    case FETCH_PINS:
      return { ...state, allPins: [...action.payload] };
    case FETCH_PIN:
      return { ...state, selectedPin: action.payload }
    default:
      return state;
  }
}
