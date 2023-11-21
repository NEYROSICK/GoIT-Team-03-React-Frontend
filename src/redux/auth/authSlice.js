
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  userName: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userName = action.payload.userName;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userName = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUserName = (state) => state.auth.userName;

export default authSlice.reducer;
