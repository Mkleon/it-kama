import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';

const DialogMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type='text' component='textarea' />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  )
};

const DialogMessageReduxForm = reduxForm({ form: 'dialodMessage' })(DialogMessage);

const Dialogs = (props) => {
  const { updateMessageText, addMessage, dialogs, messages, newMessageText } = props;

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
            return <DialogItem key={dialog.id} dialog={dialog} />
          })}
        </div>
        <div className={classes.messages}>
          {messages.map((messages) => (
            <Message key={messages.id} messages={messages} />
          ))}
        </div>
        <div>
        <DialogMessageReduxForm onSubmit={handleClick} />
      </div>
      </div>
    </div>
  );
};

export default Dialogs;