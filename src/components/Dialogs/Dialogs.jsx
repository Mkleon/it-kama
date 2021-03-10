import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import classes from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';
import { required, maxLength30 } from '../../utils/validators/validators';

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type='text' component={Textarea} name='newMessageBody' 
          placeholder='Enter yous message'
          validate={[required, maxLength30]} />
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  )
};

const AddMessageFormRedux = reduxForm({ form: 'dialodAddMessageForm' })(AddMessageForm);

const Dialogs = (props) => {
  const { addMessage, dialogs, messages } = props;

  const addNewMessage = (values) => {
    addMessage(values.newMessageBody);
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
            <Message  messages={messages} />
          ))}
        </div>
        <div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
      </div>
    </div>
  );
};

export default Dialogs;