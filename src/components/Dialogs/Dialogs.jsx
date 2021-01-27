import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  const { dialogs, messages } = props.messagesPage;
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          {dialogs.map(({ id, name}) => (
            <DialogItem name={name} id={id} />
          ))}
        </div>
        <div className={classes.messages}>
          {messages.map(({ id, text }) => (
            <Message text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;