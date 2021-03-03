import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  const { updateMessageText, addMessage, dialogs, messages, newMessageText, users } = props;

  const handleChange = (e) => {
    const text = e.target.value;
    updateMessageText(text);
  }

  const handleClick = (e) => {
    addMessage();
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogs.map((dialog) => {
            return <DialogItem key={dialog.id} dialog={dialog} users={users} />
          })}
        </div>
        <div className={classes.messages}>
          {messages.map((messages) => (
            <Message key={messages.id} messages={messages} />
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