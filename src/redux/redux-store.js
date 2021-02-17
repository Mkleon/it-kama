import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import friendsReducer from './friendsReducer';
import dialogsReducer from './dialogsReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  users: usersReducer,
  friends: friendsReducer,
  auth: authReducer,
});

const store = createStore(reducers);

export default store;