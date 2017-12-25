import axios from 'axios';
import {
  FETCH_USER,
  EDIT_USER,
  CREATE_PIN,
  FETCH_PINS,
  FETCH_PIN,
  EDIT_PIN,
  DELETE_PIN,
  CLEAR_PIN,
  SET_ACTIVE_PIN,
  SAVE_PIN,
  HIDE_PIN,
  FETCH_TAGS,
  FETCH_USER_ALL_DATA,
} from './types';

/* USER */

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/users/me');
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchUserAllData = () => async dispatch => {
  const res = await axios.get('/api/users/me/populate');
  dispatch({ type: FETCH_USER_ALL_DATA, payload: res.data });
}

export const editUser = (userData, nav) => async dispatch => {
  const res = await axios.post('/api/users/me/edit', userData);
  nav();
  dispatch({ type: EDIT_USER, payload: res.data });
}

export const savePin = (id) => async dispatch => {
  const res = await axios.post(`/api/pins/${id}/save`);
  dispatch({ type: SAVE_PIN, payload: res.data })
}

export const hidePin = (id) => async dispatch => {
  const res = await axios.post(`/api/pins/${id}/hide`);
  dispatch({ type: HIDE_PIN, payload: res.data });
}

/* PINS ARRAY */

export const createPin = (pin, nav) => async dispatch => {
  const res = await axios.post('/api/pins', pin);
  nav();
  dispatch({ type: CREATE_PIN, payload: res.data });
}

export const fetchPins = () => async dispatch => {
  const res = await axios.get('/api/pins');
  dispatch({ type: FETCH_PINS, payload: res.data });
}

export const editPin = (id, pin, nav) => async dispatch => {
  dispatch({ type: EDIT_PIN, payload: pin });
  const res = await axios.post(`/api/pins/${id}/edit`, pin);
  nav();
  dispatch({ type: EDIT_PIN, payload: res.data });
}

export const deletePin = (id) => async dispatch => {
  const res = await axios.delete(`/api/pins/${id}`);
  dispatch({ type: DELETE_PIN, payload: id })
}

/* TAGS ARRAY */

export const fetchTags = () => async dispatch => {
  const res = await axios.get('/api/pins/tags');
  dispatch({ type: FETCH_TAGS, payload: res.data });
}

/* SELECTED PIN */

export const fetchPin = (id) => async dispatch => {
  const res = await axios.get(`/api/pins/${id}`);
  dispatch({ type: FETCH_PIN, payload: res.data });
}

export const setActivePin = (pin) => ({ type: SET_ACTIVE_PIN, payload: pin });

export const clearPin = () => ({
  type: CLEAR_PIN,
  payload: null
});
