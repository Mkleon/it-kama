import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ThunkMiddleware)));

export default store;