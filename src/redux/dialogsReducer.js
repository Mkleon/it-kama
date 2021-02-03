const MESSAGE_ADD = 'MESSAGE_ADD';
const MESSAGE_TEXT_UPDATE = 'MESSAGE_TEXT_UPDATE';

const initialState = {
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
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_ADD: {      
      const text = state.newMessageText;
      const newMessage = {
        dialogId: 1,
        id: 4,
        text,
        createdBy: 1,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: '',
      };
    }
    case MESSAGE_TEXT_UPDATE: {
      return {
        ...state,
        newMessageText: action.text,
      };
    }
    default: {
      return state;
    }
  }
};

export const addMessageCreator = () => ({
  type: MESSAGE_ADD,
});

export const updateMessageTextCreator = (text) => ({
  type: MESSAGE_TEXT_UPDATE,
  text,
});

export default usersReducer;