import axios from 'axios';

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
} from './transaction-actions';

axios.defaults.baseURL = 'https://personal-expenses.herokuapp.com';

const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransRequest());
  try {
    const { data } = await axios.get('/api/transactions');

    console.log('Fetch data', data.transaction);

    dispatch(fetchTransSuccess(data));
  } catch (error) {
    dispatch(fetchTransError(error.message));
  }
};

const addTransactions = transaction => async dispatch => {
  dispatch(addTransRequest());
  try {
    const { data } = await axios.post('/api/transactions', transaction);

    console.log('Add data', data.data);

    dispatch(addTransSuccess(data.data));
  } catch (error) {
    dispatch(addTransError(error.message));
  }
};

const deleteTransaction = transactionId => async dispatch => {
  dispatch(deleteTransRequest());
  try {
    // await axios.delete(`/api/transactions/${transactionId}`);
    // dispatch(deleteTransSuccess(transactionId));

    const { data } = await axios.delete(`/api/transactions/${transactionId}`);

    console.log('Delete data', data.data);

    dispatch(deleteTransSuccess(data.data));
  } catch (error) {
    dispatch(deleteTransError(error.message));
  }
};

const updateTransaction =
  ({ date, transactionId }) =>
  async dispatch => {
    dispatch(updateTransRequest());
    const updateTransaction = { date };
    try {
      const { data } = await axios.patch(
        `/api/transactions/${transactionId}`,
        updateTransaction,
      );
      console.log('Update data', data.data);
      dispatch(updateTransSuccess(data.data));
    } catch (error) {
      dispatch(updateTransError(error.message));
    }
  };

const filterTransaction = (month, year) => async dispatch => {
  dispatch(filterTransRequest());

  try {
    const { data } = await axios.get(
      `/api/transactions/stats?month=${month}&year=${year}`,
    );

    console.log('Filter data', data.data);

    dispatch(filterTransSuccess(data.data));
  } catch (error) {
    dispatch(filterTransError(error.message));
  }
};

const transactionOperations = {
  fetchTransactions,
  addTransactions,
  deleteTransaction,
  updateTransaction,
  filterTransaction,
};

export default transactionOperations;
