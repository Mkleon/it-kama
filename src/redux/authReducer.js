const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA: {
      return {
        ...state,
        ...action.data,
        isLogin: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const setUserAuthData = (userId, email, login) => ({ type: SET_USER_AUTH_DATA,  data: { userId, email, login } });

export default authReducer;