import { createAction } from '@reduxjs/toolkit';

// pending
export const registerRequest = createAction('register/registerRequest');
// fulfilled
export const registerSuccess = createAction('register/registerSuccess');
// rejected
export const registerError = createAction('register/registerError');

export const loginRequest = createAction('login/loginRequest');
export const loginSuccess = createAction('login/loginSuccess');
export const loginError = createAction('login/loginError');

export const logoutRequest = createAction('logout/logoutRequest');
export const logoutSuccess = createAction('logout/logoutSuccess');
export const logoutError = createAction('logout/logoutError');

export const fetchCurrentUserRequest = createAction(
  'auth/fetchCurrentUserRequest',
);
export const fetchCurrentUserSuccess = createAction(
  'auth/fetchCurrentUserSuccess',
);
export const fetchCurrentUserError = createAction('auth/fetchCurrentUserError');
