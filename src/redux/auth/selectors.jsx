export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectUser = state => state.auth.user;
export const selectIsNewUser = state => state.auth.isNewUser;
export const selectToken = state => state.auth.token;
// export const selectIsRefreshing = state => state.auth.isRefreshing;