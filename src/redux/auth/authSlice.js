import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut } from './operations';

const initialState = {
  user: { userName: null, email: null },
  isAuthenticated: false,
  isNewUser: null,
  token: null,
};

const handleFulfilledRegister = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuthenticated = true;
  state.isNewUser = true;
};

const handleFulfilledLogin = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuthenticated = true;
};

const handleFulfilledLogOut = (state) => {
  state.user = { userName: null, email: null };
  state.token = null;
  state.isAuthenticated = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(login.fulfilled, handleFulfilledLogin)
      .addCase(logOut.fulfilled, handleFulfilledLogOut);
  },
  reducers: {
    changeIsNewUser(state, action) {
      return {
        ...state,
        isNewUser: action.payload,
      };
    },
  },
});

export const { changeIsNewUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
