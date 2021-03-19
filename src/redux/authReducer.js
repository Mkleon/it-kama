import { stopSubmit } from "redux-form";
import { authApi } from "../api/api";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

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

export const authMeThC = () => {
  return (dispatch) => {
    authApi.getAuthMe()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          dispatch(setUserAuthData(id, email, login, true));
        }
      });
    };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authApi.login(email, password, rememberMe)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(authMeThC());
        } else {
          const message = response.data.messages.length > 0
            ? response.data.messages.join('/n')
            : 'Unknown error';
          dispatch(stopSubmit('login', {_error: message}));
        }
      });
    };
};

export const logout = () => {
  return (dispatch) => {
    authApi.logout()
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setUserAuthData(null, null, null, false));
        }
      });
    };
};

export default authReducer;