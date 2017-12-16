import axios from 'axios';
import {
  FETCH_USER,
  CREATE_PIN,
  FETCH_PINS,
  FETCH_PIN,
  EDIT_PIN,
  CLEAR_PIN
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/user');
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchPins = () => async dispatch => {
  const res = await axios.get('/api/pins');
  dispatch({ type: FETCH_PINS, payload: res.data });
}

export const fetchPin = (id) => async dispatch => {
  const res = await axios.get(`/api/pin/${id}`);
  dispatch({ type: FETCH_PIN, payload: res.data });
}

export const createPin = (pin) => async dispatch => {
  const res = await axios.post('/api/pin', pin);
  dispatch({ type: CREATE_PIN, payload: res.data });
}

export const editPin = (id, pin) => async dispatch => {
  const res = await axios.post(`/api/pin/${id}/edit`, pin);
  dispatch({ type: EDIT_PIN, payload: res.data });
}

export const clearPin = () => ({
  type: CLEAR_PIN,
  payload: null
});
