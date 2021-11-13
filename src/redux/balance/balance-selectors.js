const getBalance = state => state.balance.balance;
const getLoading = state => state.balance.isLoading;
const getError = state => state.balance.error;

const balanceSelectors = {
  getBalance,
  getLoading,
  getError,
};

export default balanceSelectors;
