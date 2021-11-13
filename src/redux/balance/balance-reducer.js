import { createReducer, combineReducers } from '@reduxjs/toolkit';

import actions from './balance-actions';

const { fetchBalanceRequest, fetchBalanceSuccess, fetchBalanceError } = actions;

const balance = createReducer(null, {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchBalanceSuccess]: () => false,
  [fetchBalanceRequest]: () => true,
  [fetchBalanceError]: () => false,
});

const error = createReducer(null, {
  [fetchBalanceRequest]: () => null,
  [fetchBalanceError]: (_, { payload }) => payload,
});

const balanceReducer = combineReducers({
  balance,
  isLoading,
  error,
});

export default balanceReducer;
