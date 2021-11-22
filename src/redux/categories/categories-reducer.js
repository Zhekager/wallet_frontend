import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { getCategoriesSuccess } from './categories-actions';

const result = createReducer([], {
    [getCategoriesSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
    result,
});