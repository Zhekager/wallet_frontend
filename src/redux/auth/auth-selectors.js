const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

const getToken = state => state.auth.token;

const getBalance = state => state.auth.user.balance;

const getTransactionsUser = state => state.auth.transactions;

const getUserEmail = state => state.auth.user.email;
const getIsRegistered = state => state.auth.isRegistered;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getLoading,
  getError,
  getToken,
  getBalance,
  getTransactionsUser,
  getUserEmail,
  getIsRegistered,
};
export default authSelectors;
