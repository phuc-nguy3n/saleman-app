import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import productsReducer from './slices/productsCartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    productsCart: productsReducer,
  },
});

export default store;
