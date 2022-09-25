import { AUTHENTICATION_USER, AUTHENTICATION_ERROR } from '../actions';

const initialState = {
  authenticated: localStorage.getItem('token') || '',
  errorMessage: '',
  email: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATION_USER:
      return { ...state, authenticated: action.payload.token,
          email: action.payload.email || null
        };
    case AUTHENTICATION_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}