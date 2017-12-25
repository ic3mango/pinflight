import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'

import auth from './authReducer';
import pins from './pinsReducer';
import tags from './tagsReducer';
import selectedPin from './selectedPinReducer';

export default combineReducers({
  tags,
  auth,
  pins,
  selectedPin,
  form
});
