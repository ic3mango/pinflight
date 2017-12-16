import { combineReducers } from 'redux';

import authReducer from './authReducer';
import pinsReducer from './pinsReducer';

export default combineReducers({
  auth: authReducer,
  pins: pinsReducer
});
