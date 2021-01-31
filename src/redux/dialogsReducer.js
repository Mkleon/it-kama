const MESSAGE_ADD = 'MESSAGE_ADD';
const MESSAGE_TEXT_UPDATE = 'MESSAGE_TEXT_UPDATE';

const usersReducer = (state, action) => {
  switch (action.type) {
    case MESSAGE_ADD: {      
      const text = state.newMessageText;
      const newMessage = {
        dialogId: 1,
        id: 1,
        text,
        createdBy: 1,
      };

      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    }
    case MESSAGE_TEXT_UPDATE: {
      state.newMessageText = action.text;
      return state;
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