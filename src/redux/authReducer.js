import { stopSubmit } from "redux-form";
import { authApi } from "../api/api";

const SET_USER_AUTH_DATA = 'it-kama/auth/SET_USER_AUTH_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const setUserAuthData = (userId, email, login, isAuth) => ({ type: SET_USER_AUTH_DATA,  payload: { userId, email, login, isAuth } });

export const authMeThC = () => async (dispatch) => {
  const data = await authApi.getAuthMe();
    
  if (data.resultCode === 0) {
    const { id, email, login } = data.data;
    dispatch(setUserAuthData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authApi.login(email, password, rememberMe);
  
  if (response.data.resultCode === 0) {
    dispatch(authMeThC());
  } else {
    const message = response.data.messages.length > 0
      ? response.data.messages.join('/n')
      : 'Unknown error';
    dispatch(stopSubmit('login', {_error: message}));
  }
};

export const logout = () => async (dispatch) => {
  const data = await authApi.logout()
  
  if (data.resultCode === 0) {
    dispatch(setUserAuthData(null, null, null, false));
  }
};

export default authReducer;