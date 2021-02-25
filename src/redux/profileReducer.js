import { profileApi } from "../api/api";

const POST_ADD = 'POST_ADD';
const PROFILE_TEXT_UPDATE = 'PROFILE_TEXT_UPDATE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
  posts:[
    { id: 1, text: 'Hi, How are you?', likesCount: 0 },
    { id: 2, text: 'It is my first post', likesCount: 25 },
  ],
  newPost: {
    text: '',
  },
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ADD: {
      const { text } = state.newPost;

      return {
        ...state,
        posts: [...state.posts, { d: 3, text, likesCount: 0 }],
        newPost: { text: '' },
      };
    }
    case PROFILE_TEXT_UPDATE: {
      return {
        ...state,
        newPost: { text: action.text },
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    default: {
      return state;
    }
  }
};

export const addPostCreator = () => ({ type: POST_ADD });
export const updateProfileTextCreator = (text) => ({ type: PROFILE_TEXT_UPDATE, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getUserProfileThC = (userId) => {
  return (dispatch) => {
    profileApi.getUserProfile(userId)
      .then((data) => {
        dispatch(setUserProfile(data));
      });
  };
};

export default profileReducer;