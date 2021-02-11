const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_PAGE = 'SET_PAGE';

const initialState = {
  byId: {},
  allIds: [],
  totalCountPages: 0,
  countPerPage: 100,
  currentPage: 1,
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
    default: {
      return state;
    }
  }
};

export const followCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersCreator = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCountCreator = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setPageCreator = (page) => ({ type: SET_PAGE, page });

export default usersReducer;