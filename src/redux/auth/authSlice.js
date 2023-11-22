
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './operations';

const initialState = {
  user: { userName: null, email: null },
  isAuthenticated: false,
   token: null,
};

const handleFulfilledRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuthenticated = true;
};

const handleFulfilledLogIn = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuthenticated = true;
};

const handleFulfilledLogOut = state => {
  state.user = { userName: null, email: null };
  state.token = null;
  state.isAuthenticated = false;
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(logIn.fulfilled, handleFulfilledLogIn)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
  },
});

export const authReducer = authSlice.reducer;