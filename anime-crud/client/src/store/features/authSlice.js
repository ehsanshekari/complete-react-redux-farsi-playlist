import { createSlice } from '@reduxjs/toolkit';

export const TOKEN_EXPIRE_TIME = 30 * 60 * 1000;

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: '',
    tokenExpiration: '',
  },
  reducers: {
    login: (state, action) => {
      const expireTime = Date.now() + TOKEN_EXPIRE_TIME;
      const token = action.payload;
      state.token = token;
      state.isAuthenticated = true;
      state.tokenExpiration = expireTime;

      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiration', expireTime);
    },
    logout: (state) => {
      state.token = '';
      state.isAuthenticated = false;
      state.tokenExpiration = '';

      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
    },
    setAuth: (state, action) => {
      const { token, expiration, isAuthenticated } = action.payload;

      state.token = token;
      state.isAuthenticated = isAuthenticated;
      state.tokenExpiration = expiration;
    },
  },
});

export const startTokenExpireTimer =
  (expireTime = TOKEN_EXPIRE_TIME) =>
  (dispatch) => {
    console.log('expireTime', expireTime);
    setTimeout(() => {
      console.log('dispached logged out');
      dispatch(logout());
    }, expireTime);
  };

export const initializeAuth = () => (dispatch) => {
  const savedToken = localStorage.getItem('token');
  const expiration = parseInt(localStorage.getItem('tokenExpiration'));

  if (savedToken && expiration && Date.now() < expiration) {
    dispatch(setAuth({ token: savedToken, isAuthenticated: true, expiration }));
    dispatch(startTokenExpireTimer(expiration - Date.now()));
  } else {
    dispatch(logout());
    // dispatch(setAuth({ token: '', isAuthenticated: false, expiration: '' }));
    // localStorage.removeItem('token');
    // localStorage.removeItem('tokenExpiration');
  }
};

export const loginThunk = (token) => (dispatch) => {
  dispatch(
    login(token)
  );
  dispatch(startTokenExpireTimer(TOKEN_EXPIRE_TIME));
};

export const { login, logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
