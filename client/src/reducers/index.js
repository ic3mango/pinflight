import { combineReducers } from 'redux';

import auth from './authReducer';
import pins from './pinsReducer';
import selectedPin from './selectedPinReducer';

export default combineReducers({
  auth,
  pins,
  selectedPin
});
