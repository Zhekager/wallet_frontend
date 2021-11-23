import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  getCategoriesRequest,
  getCategoriesSuccess,
} from './categories-actions';

const categories = createReducer([], {
  [getCategoriesSuccess]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [getCategoriesRequest]: () => true,
  [getCategoriesSuccess]: () => false,
});

export default combineReducers({
  categories,
  isLoading,
});
