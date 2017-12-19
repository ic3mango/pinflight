import  {
  FETCH_USER,
  FETCH_USER_ALL_DATA,
  SAVE_PIN,
  HIDE_PIN
} from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_USER_ALL_DATA:
      return action.payload || false;
    case FETCH_USER:
      return {
        ...action.payload,
        saves: action.payload.saves.map(s => ({ _id: s })),
        hides: action.payload.hides.map(h => ({ _id: h })),
        creates: action.payload.creates.map(c => ({ _id: c }))
      };
    case SAVE_PIN:
      return { ...state, saves: handleById(state.saves, action.payload )}
    case HIDE_PIN:
      return { ...state, hides: handleById(state.hides, action.payload )}
    default:
      return state;
  }
}

function handleById(array, id) {
  if (array.map(h => h._id).includes(id)) {
    return array.filter(h => h._id !== id);
  } else {
    return [ { _id: id }, ...array ]
  }
}
