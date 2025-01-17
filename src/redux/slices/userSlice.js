import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  loginError: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    clearUser: state => {
      state.userInfo = null;
    },
    setLoginError: (state, action) => {
      state.loginError = action.payload;
    },
  },
});

export const {setUser, clearUser, setLoginError} = userSlice.actions;

export default userSlice.reducer;
