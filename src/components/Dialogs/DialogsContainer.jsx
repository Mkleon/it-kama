import React from 'react';
import Dialogs from './Dialogs';
import { addMessageCreator, updateMessageTextCreator } from '../../redux/dialogsReducer';
import StoreContext from './../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
          const state = store.getState();
          const { dialogs, messages, newMessageText } = state.dialogsPage;
          const { users } = state;
          const { dispatch } = store;

          const updateMessageText = (text) => {
            dispatch(updateMessageTextCreator(text));
          }
        
          const addMessage = () => {
            dispatch(addMessageCreator());
          };

          return (
            <Dialogs
              updateMessageText={updateMessageText}
              addMessage={addMessage}
              dialogs={dialogs}
              messages={messages}
              newMessageText={newMessageText}
              users={users}
            />
          );
        }
      }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;