export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getLoading = state => state.auth.isLoading;

export const getError = state => state.auth.error;
