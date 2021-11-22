import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  fetchTransRequest,
  fetchTransSuccess,
  fetchTransError,
  addTransRequest,
  addTransSuccess,
  addTransError,
  filterTransRequest,
  filterTransSuccess,
  filterTransError,
  getStatisticsRequest,
  getStatisticsSuccess,
  getStatisticsError,
} from './transaction-actions';

const result = createReducer([], {
  [fetchTransSuccess]: (_, { payload }) => payload,
  [addTransSuccess]: (state, { payload }) => [...state, payload],
  [getStatisticsSuccess]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [filterTransSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchTransRequest]: () => true,
  [fetchTransSuccess]: () => false,
  [fetchTransError]: () => false,
  [addTransRequest]: () => true,
  [addTransSuccess]: () => false,
  [addTransError]: () => false,
  [filterTransRequest]: () => true,
  [filterTransSuccess]: () => false,
  [filterTransError]: () => false,
  [getStatisticsRequest]: () => true,
  [getStatisticsSuccess]: () => false,
  [getStatisticsError]: () => false,
});

const error = createReducer(null, {
  [fetchTransError]: (_, { payload }) => payload,
  [addTransError]: (_, { payload }) => payload,
  [filterTransError]: (_, { payload }) => payload,
  [getStatisticsError]: (_, { payload }) => payload,
  [fetchTransRequest]: () => null,
  [addTransRequest]: () => null,
  [filterTransRequest]: () => null,
  [getStatisticsRequest]: () => null,
});

export default combineReducers({
  result,
  filter,
  loading,
  error,
});
