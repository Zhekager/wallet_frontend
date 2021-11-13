import axios from 'axios';

import actions from './balance-actions';

export const fetchBalance = () => async dispatch => {
  dispatch(actions.fetchBalanceRequest());

  try {
    const {
      data: {
        response: { totalBalance },
      },
    } = await axios.get('/api/...');

    dispatch(actions.fetchBalanceSuccess(totalBalance));
  } catch (e) {
    dispatch(actions.fetchBalanceError(e.message));
  }
};
