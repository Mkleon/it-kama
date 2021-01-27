import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
  const { id, text, dialogId, createdBy } = props.messages;
  const styles = (dialogId === createdBy) ? classes.message : `${classes.message} ${classes.other}`;

  return (
    <div key={id} className={styles}>
      {text}
    </div>
  )
};

export default Message;