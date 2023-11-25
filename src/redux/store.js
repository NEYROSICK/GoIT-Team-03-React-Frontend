import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { UserApi } from './API/UserApi';
import { noticesApi } from './API/noticesApi';
import { petsApi } from './API/petsApi';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  [UserApi.reducerPath]: UserApi.reducer,
  [noticesApi.reducerPath]: noticesApi.reducer,
  [petsApi.reducerPath]: petsApi.reducer,
});

// const persistedReducer =

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(UserApi.middleware, noticesApi.middleware, petsApi.middleware),
});

export const persistor = persistStore(store);
