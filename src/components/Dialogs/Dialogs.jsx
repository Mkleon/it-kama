import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import { addMessageCreator, updateMessageTextCreator } from './../../redux/dialogsReducer';

const Dialogs = (props) => {
  const { dialogs, messages, newMessageText } = props.dialogsPage;
  const { dispatch } = props;

  const handleChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    dispatch(updateMessageTextCreator(text));
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addMessageCreator());
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogs.map((dialog) => (
            <DialogItem dialog={dialog} users={props.users} />
          ))}
        </div>
        <div className={classes.messages}>
          {messages.map((messages) => (
            <Message messages={messages} />
          ))}
        </div>
        <div>
        <div>
          <textarea onChange={handleChange} value={newMessageText} />
        </div>
        <div>
          <button onClick={handleClick}>Add message</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;