import { createSelector } from '@reduxjs/toolkit';

export const getTransactions = state => state.transactions.result;
//export const addTransactions = state => state.transactions.result;
export const getLoading = state => state.transactions.loading;
export const getError = state => state.transactions.error;
export const getFilter = state => state.transactions.filter;
export const getStatistics = state => state.transactions.result;
export const getTransactionsAuth = state => state.auth.transactions;

//export const getYears = state => state.transactions.years;
//export const getCategoriesTransactions = state => state.transactions.categories;
//export const totalTransactions = state => getTransactions(state).length;

export const getVisibleTransactions = createSelector(
  [getTransactions, getFilter],
  (transactions, filter) => {
    return transactions.filter(({ data }) => data.includes(filter));
  },
);
//const transactionSelectors = {
//  getLoading,
//  getTransactions,
//etCategoriesTransactions,
// getFilter,
//filterTransactions,
//totalTransactions,
//getLastTransaction,
// getYears
//};
//export default transactionSelectors;
