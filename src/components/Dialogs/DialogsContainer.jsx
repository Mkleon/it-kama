import React from 'react';
import Dialogs from './Dialogs';
import { addMessageCreator, updateMessageTextCreator } from '../../redux/dialogsReducer';

const DialogsContainer = (props) => {
  const state = props.store.getState();
  const { dialogs, messages, newMessageText } = state.dialogsPage;
  const { users } = state;
  const { dispatch } = props.store;

  const updateMessageText = (text) => {
    dispatch(updateMessageTextCreator(text));
  }

  const addMessage = () => {
    dispatch(addMessageCreator());
  };

  return <Dialogs
    updateMessageText={updateMessageText}
    addMessage={addMessage}
    dialogs={dialogs}
    messages={messages}
    newMessageText={newMessageText}
    users={users}
  />;
};

export default DialogsContainer;