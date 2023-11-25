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
  key: 'root',
  storage,
  blacklist: ['authApi', 'noticesApi'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  [UserApi.reducerPath]: UserApi.reducer,
  [noticesApi.reducerPath]: noticesApi.reducer,
  [petsApi.reducerPath]: petsApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(UserApi.middleware, noticesApi.middleware, petsApi.middleware),
});

export const persistor = persistStore(store);
