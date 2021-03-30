import { authMeThC } from "./authReducer";

const INITIALIZED_SUCCESS = 'it-kama/app/INITIALIZED_SUCCESS';

const initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const initializeSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => {
  return (dispatch) => {
    const result = dispatch(authMeThC());

    result.then(() => {
      dispatch(initializeSuccess());
    });
  };
};

export default appReducer;