import { followApi, usersApi } from "../api/api";

const FOLLOW = 'it-kama/users/FOLLOW';
const UNFOLLOW = 'it-kama/users/UNFOLLOW';
const SET_USERS = 'it-kama/users/SET_USERS';
const SET_TOTAL_USERS_COUNT = 'it-kama/users/SET_TOTAL_USERS_COUNT';
const SET_PAGE = 'it-kama/users/SET_PAGE';
const TOGGLE_PRELOADER = 'it-kama/users/TOGGLE_PRELOADER';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'it-kama/users/TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
  byId: {},
  allIds: [],
  totalCountPages: 0,
  countPerPage: 10,
  currentPage: 1,
  isFetching: true,
  isFollowingProgress: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        byId: { ...state.byId, [action.userId]: { ...state.byId[action.userId], followed: true } }, 
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        byId: { ...state.byId, [action.userId]: { ...state.byId[action.userId], followed: false } }, 
      };
    }
    case SET_USERS: {
      const allIds = action.users.map(({ id }) => id);
      const byId = action.users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});

      return {
        ...state,
        byId: { ...byId },
        allIds: [...allIds],
      };
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalCountPages: action.count,
      };
    }
    case SET_PAGE: {
      return {
        ...state,
        currentPage: action.page,
      };
    }
    case TOGGLE_PRELOADER: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        isFollowingProgress: action.isFetching
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter((id) => id !== action.userId),
      }
    }
    default: {
      return state;
    }
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setPage = (page) => ({ type: SET_PAGE, page });
export const togglePreloader = (isFetching) => ({ type: TOGGLE_PRELOADER, isFetching });
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const followThC = (userId) => async (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));

  const data = await followApi.setFollow(userId);

  if (data.resultCode === 0) {
    dispatch(follow(userId));
  }

  dispatch(toggleIsFollowingProgress(false, userId));
};

export const unfollowThC = (userId) => async (dispatch) => {
  dispatch(toggleIsFollowingProgress(true, userId));

  const data = await followApi.setUnfollow(userId);

  if (data.resultCode === 0) {
    dispatch(unfollow(userId));
  }

  dispatch(toggleIsFollowingProgress(false, userId));
};

export const getUsersThC = (currentPage, countPerPage) => async (dispatch) => {
  dispatch(togglePreloader(true));
  const data = await usersApi.getUsers(currentPage, countPerPage);

  dispatch(togglePreloader(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

export default usersReducer;