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
    filterTransError
} from './transaction-actions';

//axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchTransactions = () => async dispatch => {
    dispatch(fetchTransRequest());
    try {
        const { data } = await axios.get('/transactions');
        dispatch(fetchTransSuccess(data));
    } catch (error) {
        dispatch(fetchTransError(error.message));
    }
};

export const addTransactions = transaction => async dispatch => {
    dispatch(addTransRequest());
    try {
        const { data } = await axios.post('/transactions', transaction);
        dispatch(addTransSuccess(data));
    } catch (error) {
        dispatch(addTransError(error.message));
    }
};

export const deleteTransaction = transactionId => async dispatch => {
    dispatch(deleteTransRequest());
    try {
        await axios.delete(`/transactions/${transactionId}`);
        dispatch(deleteTransSuccess(transactionId));
    } catch (error) {
        dispatch(deleteTransError(error.message));
    }
};

export const updateTransaction = ({ date, transactionId }) => async dispatch => {
    dispatch(updateTransRequest());
    const updateTransaction = { date};
    try {
        const { data } = await axios.patch(
            `/transactions/${transactionId}`,
            updateTransaction,
        );
        dispatch(updateTransSuccess(data));
    } catch (error) {
    dispatch(updateTransError(error.message));
    }
};

export const filterTransaction = (month, year) => async dispatch => {
    dispatch(filterTransRequest());

    try {
        const { data } = await axios.get(`/categories?month=${month}&year=${year}`);
        dispatch(filterTransSuccess(data));
    } catch (error) {
        dispatch(filterTransError(error.message));
    }
};