import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import { addMessageActionCreator, updateMessageTextActionCreator } from './../../redux/state';

const Dialogs = (props) => {
  const { dialogs, messages, newMessageText } = props.dialogsPage;
  const { dispatch } = props;

  const newMessageElement = React.createRef();

  const handleChange = (e) => {
    e.preventDefault();
    const text = newMessageElement.current.value;
    dispatch(updateMessageTextActionCreator(text));
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addMessageActionCreator());
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
          <textarea ref={newMessageElement} onChange={handleChange} value={newMessageText} />
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