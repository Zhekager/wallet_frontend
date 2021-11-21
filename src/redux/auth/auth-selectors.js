const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

const getToken = state => state.auth.token;

// export const getBalance = state => state.auth.balance;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getLoading,
  getError,
  getToken,
};
export default authSelectors;
