import { createAction } from '@reduxjs/toolkit';

// export const fetchTransRequest = createAction('transaction/fetchTransRequest');
// export const fetchTransSuccess = createAction('transaction/fetchTransSuccess');
// export const fetchTransError = createAction('transaction/fetchTransError');

// export const addTransRequest = createAction('transaction/addTransRequest');
// export const addTransSuccess = createAction('transaction/addTransSuccess');
// export const addTransError = createAction('transaction/addTransError');

export const filterTransRequest = createAction(
  'transaction/filterTransRequest',
);
export const filterTransSuccess = createAction(
  'transaction/filterTransSuccess',
);
export const filterTransError = createAction('transaction/filterTransError');

//get statistics
export const getStatisticsRequest = createAction(
  'transactions/getStatisticsRequest',
);
export const getStatisticsSuccess = createAction(
  'transactions/getStatisticsSuccess',
);
export const getStatisticsError = createAction(
  'transactions/getStatisticsError',
);
