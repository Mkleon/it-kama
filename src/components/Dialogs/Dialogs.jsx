import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  const { dialogs, messages } = props.dialogsPage;

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
      </div>
    </div>
  );
};

export default Dialogs;