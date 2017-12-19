import  {
  FETCH_USER,
  SAVE_PIN,
  HIDE_PIN
} from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_USER:
    case SAVE_PIN:
    case HIDE_PIN:
      return action.payload || false;
    default:
      return state;
  }
}
