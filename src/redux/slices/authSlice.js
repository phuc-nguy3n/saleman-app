import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

export const {login, logout, setAuthState} = authSlice.actions;

export default authSlice.reducer;
