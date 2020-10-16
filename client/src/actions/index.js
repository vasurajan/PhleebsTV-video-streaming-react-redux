import streams from '../apis/streams'

import { SIGN_IN, SIGN_OUT } from './types';

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
export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues)
}