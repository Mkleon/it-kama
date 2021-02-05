const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  byId: {
    1: { id: 1, name: 'Piter', followed: false, location: { country: 'Russia', city: 'Tula' }, avatar: 'https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg' },
    5: { id: 5, name: 'Sergey', followed: false, location: { country: 'Belarus', city: 'Minsk' }, avatar: 'https://i.pinimg.com/originals/44/5e/fc/445efcdd7459264333a37ff0cf1febd1.jpg' },
    12: { id: 12, name: 'Sveta', followed: true, location: { country: 'Russia', city: 'Moscow' }, avatar: 'https://i.pinimg.com/736x/35/65/d6/3565d6559ee16e40137483c8391b5bf9.jpg' },
    14: { id: 14, name: 'Andrey', followed: true, location: { country: 'USA', city: 'Orlando' }, avatar: 'https://i.redd.it/6xgyra4ztzs41.png' },
  },
  allIds: [1, 5, 12, 14],
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
      return {
        ...state,
        byId: { ...action.users },
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

export default usersReducer;