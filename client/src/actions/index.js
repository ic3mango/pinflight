import axios from 'axios';
import {
  FETCH_USER,
  CREATE_PIN,
  FETCH_PINS,
  FETCH_PIN,
  EDIT_PIN,
  CLEAR_PIN,
  SET_ACTIVE_PIN,
  SAVE_PIN,
  HIDE_PIN,
  FETCH_TAGS,
} from './types';

/* USER */

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/user');
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const savePin = (id) => async dispatch => {
  const res = await axios.post(`/api/pin/${id}/save`);
  dispatch({ type: SAVE_PIN, payload: res.data })
}

export const hidePin = (id) => async dispatch => {
  const res = await axios.post(`/api/pin/${id}/hide`);
  dispatch({ type: HIDE_PIN, payload: res.data });
}

/* PINS ARRAY */

export const createPin = (pin) => async dispatch => {
  const res = await axios.post('/api/pin', pin);
  dispatch({ type: CREATE_PIN, payload: res.data });
}

export const fetchPins = () => async dispatch => {
  const res = await axios.get('/api/pins');
  dispatch({ type: FETCH_PINS, payload: res.data });
}

export const editPin = (id, pin) => async dispatch => {
  dispatch({ type: EDIT_PIN, payload: pin });
  const res = await axios.post(`/api/pin/${id}/edit`, pin);
  dispatch({ type: EDIT_PIN, payload: res.data });
}

/* TAGS ARRAY */

export const fetchTags = () => async dispatch => {
  const res = await axios.get('/api/pins/tags');
  dispatch({ type: FETCH_TAGS, payload: res.data });
}

/* SELECTED PIN */

export const fetchPin = (id) => async dispatch => {
  const res = await axios.get(`/api/pin/${id}`);
  dispatch({ type: FETCH_PIN, payload: res.data });
}

export const setActivePin = (pin) => ({ type: SET_ACTIVE_PIN, payload: pin });

export const clearPin = () => ({
  type: CLEAR_PIN,
  payload: null
});
