import { profileApi } from "../api/api";

const POST_ADD = 'it-kama/profile/POST_ADD';
const SET_USER_PROFILE = 'it-kama/profile/SET_USER_PROFILE';
const SET_STATUS = 'it-kama/profile/SET_STATUS';
const DELETE_POST = 'it-kama/profile/DELETE_POST';

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
    case DELETE_POST: {
      const newPosts = state.posts.filter((id) => id !== action.postId );
      return {
        ...state,
        posts: newPosts
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
export const deletePostCreator = (postId) => ({ type: DELETE_POST, postId });

export const getUserProfileThC = (userId) => async (dispatch) => {
    const data = await profileApi.getUserProfile(userId);
    dispatch(setUserProfile(data));
};

export const getUserStatusThC = (userId) => async (dispatch) => {
  const response = await profileApi.getStatus(userId);
  dispatch(setStatus(response.data));
};


export const updateUserStatusThC = (status) => async (dispatch) => {
  const response = await profileApi.setStatus(status);
      
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;