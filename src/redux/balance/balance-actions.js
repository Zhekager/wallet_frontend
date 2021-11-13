import { createAction } from '@reduxjs/toolkit';

const fetchBalanceRequest = createAction('balance/fetchBalanceRequest');
const fetchBalanceSuccess = createAction('balance/fetchBalanceSuccess');
const fetchBalanceError = createAction('balance/fetchBalanceError');

const actions = {
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
};

export default actions;
