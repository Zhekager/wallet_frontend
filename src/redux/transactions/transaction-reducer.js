import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  fetchTransRequest,
  fetchTransSuccess,
  fetchTransError,
  addTransRequest,
  addTransSuccess,
  addTransError,
  deleteTransRequest,
  deleteTransSuccess,
  deleteTransError,
  updateTransRequest,
  updateTransSuccess,
  updateTransError,
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
  [deleteTransSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [updateTransSuccess]: (state, { payload }) =>
    state.map(transaction =>
      transaction.id === payload.transactionId ? payload : transaction,
    ),
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
  [deleteTransRequest]: () => true,
  [deleteTransSuccess]: () => false,
  [deleteTransError]: () => false,
  [updateTransRequest]: () => true,
  [updateTransSuccess]: () => false,
  [updateTransError]: () => false,
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
  [deleteTransError]: (_, { payload }) => payload,
  [filterTransError]: (_, { payload }) => payload,
  [getStatisticsError]: (_, { payload }) => payload,
  [fetchTransRequest]: () => null,
  [addTransRequest]: () => null,
  [deleteTransRequest]: () => null,
  [filterTransRequest]: () => null,
  [getStatisticsRequest]: () => null,
});

export default combineReducers({
  result,
  filter,
  loading,
  error,
});
