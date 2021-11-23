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

const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransRequest());
  try {
    const { data } = await axios.get('/api/transactions');

    console.log('Fetch data', data);

    dispatch(fetchTransSuccess(data.data.result));
    
  } catch (error) {
    dispatch(fetchTransError(error.message));
  }
};

export const addTransactions = transaction => async dispatch => {
  dispatch(addTransRequest());
  try {
    const { data } = await axios.post('/api/transactions', transaction);

    console.log('Add data', data.data.result);

    dispatch(addTransSuccess(data.result));
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
  filterTransaction,
};
export { getStatistics };
export default transactionOperations;
