const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

const getToken = state => state.auth.token;

const getBalance = state => state.auth.user.balance;

const getTransactionsUser = state => state.auth.transactions;



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
