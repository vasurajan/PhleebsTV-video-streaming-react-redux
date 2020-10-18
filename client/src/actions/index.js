import streams from '../apis/streams'

import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
  SIGN_IN,
  SIGN_OUT
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};


// action creator for handling creation of streams
export const createStream = formValues => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const response = await streams.post('/streams', {...formValues, userId});

  dispatch({
    type: CREATE_STREAM,
    payload: response.data
  })
}


// action creator for handling fetching of streams
export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams')

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data
  })
}


// action creator for fetching of a stream
export const fetchStream = (id) => async dispatch => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data
  })
}



// action creator for handling editing/updating a stream
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues)

  dispatch({
    type: EDIT_STREAM,
    payload: response.data
  })
}



// action creator for handling deletion of a stream
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`)  // no response since we only need to delete stream with particular id

  dispatch({
    type: DELETE_STREAM,
    payload: id
  })
}
