import { applyMiddleware, combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import friendsReducer from './friendsReducer';
import dialogsReducer from './dialogsReducer';
import authReducer from './authReducer';
import ThunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';


const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  users: usersReducer,
  friends: friendsReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;