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
  getUserByGoogleAuthSuccess,
  addTransRequest,
  addTransSuccess,
  addTransError,
} from './auth-actions';

const user = createReducer(
  { name: null, email: null },
  {
    [registerSuccess]: (_, { payload }) => payload,
    [loginSuccess]: (_, { payload }) => payload,
    [logoutSuccess]: () => ({ name: null, email: null }),
    [fetchCurrentUserSuccess]: (_, { payload }) => payload.user,
    [getUserByGoogleAuthSuccess]: (_, { payload }) => payload.user,
    [addTransSuccess]: (state, { payload }) => [...state, payload],
  },
);

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
  [getUserByGoogleAuthSuccess]: (_, { payload }) => payload.token,
});

const isLoggedIn = createReducer(false, {
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginSuccess]: () => true,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
  [fetchCurrentUserSuccess]: () => true,
  [getUserByGoogleAuthSuccess]: () => true,
  [fetchCurrentUserError]: () => false,
  [addTransRequest]: () => true,
  [addTransSuccess]: () => false,
  [addTransError]: () => false,
  // [logoutError]: () => true,
});

const isRegistered = createReducer(false, {
  [registerSuccess]: () => true,
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
  [addTransError]: (_, { payload }) => payload,
  [addTransRequest]: () => null,
});

// const balance = createReducer(null, {});

export default combineReducers({
  user,
  token,
  isLoggedIn,
  isRegistered,
  isLoading,
  error,
  // balance,
});
