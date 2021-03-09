const MESSAGE_ADD = 'MESSAGE_ADD';

const initialState = {
  dialogs: [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Petr' },
    { id: 3, name: 'Sergey' },
  ],      
  messages: [
    { dialogId: 1, id: 1, text: 'Hi!', createdBy: 1 },
    { dialogId: 1, id: 2, text: 'Hi, Piter!', createdBy: 2 },
    { dialogId: 1, id: 3, text: 'How are you?', createdBy: 1 },
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_ADD: {      
      const text = action.newMessage;
      const newMessage = {
        dialogId: 1,
        id: 5,
        text,
        createdBy: 1,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    default: {
      return state;
    }
  }
};

export const addMessage = (newMessage) => ({ type: MESSAGE_ADD, newMessage });

export default usersReducer;