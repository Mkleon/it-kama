import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
  const path = `/dialogs/${props.id}`;

  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={classes.message}>
      {props.text}
    </div>
  )
};

const Dialogs = (props) => {
  const dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Sergey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Andrey' },
  ];

  const messages = [
    { id: 1, text: 'Hi!' },
    { id: 2, text: 'Hi, Piter!' },
    { id: 3, text: 'How are you?' },
  ]

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