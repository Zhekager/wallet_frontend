import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
} from './auth-actions';

const user = createReducer(
  { name: null, email: null },
  {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => ({ name: null, email: null }),
    [fetchCurrentUserSuccess]: (_, { payload }) => payload,
  },
);

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const isLoggedIn = createReducer(false, {
  [registerSuccess]: () => true,
  [registerError]: () => false,
  [loginSuccess]: () => true,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [fetchCurrentUserSuccess]: () => true,
  [fetchCurrentUserError]: () => false,
  // [logoutError]: () => true,
});

const isLoading = createReducer(false, {
  [registerSuccess]: () => false,
  [registerRequest]: () => true,
  [registerError]: () => false,
  [loginSuccess]: () => false,
  [loginRequest]: () => true,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [logoutRequest]: () => true,
  [logoutError]: () => false,
  [fetchCurrentUserSuccess]: () => false,
  [fetchCurrentUserRequest]: () => true,
  [fetchCurrentUserError]: () => false,
});

const error = createReducer(null, {
  [registerRequest]: () => null,
  [registerError]: (_, { payload }) => payload,
  [loginRequest]: () => null,
  [loginError]: (_, { payload }) => payload,
  [logoutRequest]: () => null,
  [logoutError]: (_, { payload }) => payload,
  [fetchCurrentUserRequest]: () => null,
  [fetchCurrentUserError]: (_, { payload }) => payload,
});

export default combineReducers({
  user,
  token,
  isLoggedIn,
  isLoading,
  error,
});
