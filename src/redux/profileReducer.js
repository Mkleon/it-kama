import { profileApi } from "../api/api";

const POST_ADD = 'POST_ADD';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts:[
    { id: 1, text: 'Hi, How are you?', likesCount: 0 },
    { id: 2, text: 'It is my first post', likesCount: 25 },
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ADD: {
      return {
        ...state,
        posts: [...state.posts, { id: 3, text: action.newMessage, likesCount: 0 }],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    default: {
      return state;
    }
  }
};

export const addPostCreator = (newMessage) => ({ type: POST_ADD, newMessage });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status});

export const getUserProfileThC = (userId) => {
  return (dispatch) => {
    profileApi.getUserProfile(userId)
      .then((data) => {
        dispatch(setUserProfile(data));
      });
  };
};

export const getUserStatusThC = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId)
      .then((response) => {
        dispatch(setStatus(response.data));
      })
  };
};

export const updateUserStatusThC = (status) => {
  return (dispatch) => {
    profileApi.setStatus(status)
      .then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status));
        }
      })
  };
}

export default profileReducer;