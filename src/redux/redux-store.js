import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import friendsReducer from './friendsReducer';
import dialogsReducer from './dialogsReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  users: usersReducer,
  friends: friendsReducer,
});

const store = createStore(reducers);

export default store;