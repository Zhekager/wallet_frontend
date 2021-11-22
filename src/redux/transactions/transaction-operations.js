import axios from 'axios';

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

axios.defaults.baseURL = 'https://personal-expenses.herokuapp.com';
const setToken = token => {
  if (!axios.defaults.headers.common.Authorization)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const fetchTransactions = (token) => async dispatch => {
  dispatch(fetchTransRequest());
  try {
    setToken(token);
    const { data } = await axios.get('/api/transactions');

    console.log('Fetch data', data.data.result);

    dispatch(fetchTransSuccess(data.data.result));
  } catch (error) {
    dispatch(fetchTransError(error.message));
  }
};

const addTransactions = transaction => async dispatch => {
  dispatch(addTransRequest());
  try {
    const { data } = await axios.post('/api/transactions', transaction);

    console.log('Add data', data.data.result);

    dispatch(addTransSuccess(data.data.result));
  } catch (error) {
    dispatch(addTransError(error.message));
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

const getStatistics =
  ({ month, year }) =>
  async dispatch => {
    dispatch(getStatisticsRequest());
    try {
      const { data } = await axios.get(
        `/transactions/statistics?month=${month}&year=${year}`,
      );
      console.log(data.data);

      dispatch(getStatisticsSuccess(data.data));
    } catch (error) {
      dispatch(getStatisticsError(error.message));
    }
  };

const transactionOperations = {
  fetchTransactions,
  addTransactions,
  filterTransaction,
  getStatistics,
};

export default transactionOperations;
