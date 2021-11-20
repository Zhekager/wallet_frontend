export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getLoading = state => state.auth.isLoading;

export const getError = state => state.auth.error;

//const getBalance = state => state.auth.balance;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getLoading,
  getError,
  //getBalance
};

export default authSelectors;
