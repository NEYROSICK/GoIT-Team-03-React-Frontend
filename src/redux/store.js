import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { UserApi } from './API/UserApi';
import {noticesApi} from './API/noticesApi'

const rootReducer = combineReducers({
  auth: authReducer,
  [UserApi.reducerPath]: UserApi.reducer,
  [noticesApi.reducerPath]: noticesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UserApi.middleware),
});
