import  {
  FETCH_USER,
  EDIT_USER,
  FETCH_USER_ALL_DATA,
  SAVE_PIN,
  HIDE_PIN,
  DELETE_PIN
} from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_USER_ALL_DATA:
      return { ...action.payload };
    case FETCH_USER:
      return action.payload && 
      { ...action.payload,
        creates: action.payload.creates.map(toObjId),
        saves: action.payload.saves.map(toObjId),
        hides: action.payload.hides.map(toObjId),
      };
    case EDIT_USER:
      return { ...action.payload };
    case DELETE_PIN:
      return { ...state, creates: handleById(state.creates, action.payload )}
    case SAVE_PIN:
      return { ...state, saves: handleById(state.saves, action.payload )}
    case HIDE_PIN:
      return { ...state, hides: handleById(state.hides, action.payload )}
    default:
      return state;
  }
}

function toObjId(string) {
  return { _id: string };
}

function handleById(array, id) {
  if (array.map(h => h._id).includes(id)) {
    return array.filter(h => h._id !== id);
  } else {
    return [ { _id: id }, ...array ]
  }
}
