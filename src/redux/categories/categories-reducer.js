import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getCategoriesRequest,
  getCategoriesSuccess,
} from './categories-actions';

const result = createReducer([], {
  [getCategoriesSuccess]: (_, { payload }) => payload.result,
});

const isLoading = createReducer(false, {
  [getCategoriesRequest]: () => true,
  [getCategoriesSuccess]: () => false,
});

export default combineReducers({
  result,
  isLoading,
});
