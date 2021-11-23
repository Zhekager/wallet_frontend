const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

const getToken = state => state.auth.token;

const getBalance = state => state.auth.user.balance;

const getTransactionsUser = state => state.auth.transactions;

// const getCategories = state => state.auth.user.

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getLoading,
  getError,
  getToken,
  getBalance,
  getTransactionsUser,
};
export default authSelectors;
