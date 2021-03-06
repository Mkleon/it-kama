import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import friendsReducer from './friendsReducer';
import dialogsReducer from './dialogsReducer';

const store = {
  _subscribe: () => {},
  _state: {
    users: {
      1: { id: 1, name: 'Piter', avatar: 'https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg' },
      5: { id: 5, name: 'Sergey', avatar: 'https://i.pinimg.com/originals/44/5e/fc/445efcdd7459264333a37ff0cf1febd1.jpg' },
      12: { id: 12, name: 'Sveta', avatar: 'https://i.pinimg.com/736x/35/65/d6/3565d6559ee16e40137483c8391b5bf9.jpg' },
      14: { id: 14, name: 'Andrey', avatar: 'https://i.redd.it/6xgyra4ztzs41.png' },
    },
    dialogsPage: {
      dialogs: [
        { id: 1, userId: 1 },
        { id: 2, userId: 5 },
        { id: 3, userId: 12 },
        { id: 4, userId: 14 },
      ],      
      messages: [
        { dialogId: 1, id: 1, text: 'Hi!', createdBy: 1 },
        { dialogId: 1, id: 2, text: 'Hi, Piter!', createdBy: 2 },
        { dialogId: 1, id: 3, text: 'How are you?', createdBy: 1 },
      ],
      newMessageText: '',
    },
    profilePage: {
      posts:[
        { id: 1, text: 'Hi, How are you?', likesCount: 0 },
        { id: 2, text: 'It is my first post', likesCount: 25 },
      ],
      newPost: {
        text: '',
      }
    },
    friends: [5, 12],
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._subscribe = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.users = usersReducer(this._state.users, action);
    this._state.friends = friendsReducer(this._state.friends, action);

    this._subscribe(this._state);
  }
};

export default store;