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
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <DialogItem name='Dima' id='1' />
          <DialogItem name='Sergey' id='2' />
          <DialogItem name='Sveta' id='3' />
          <DialogItem name='Andrey' id='4' />
        </div>
        <div className={classes.messages}>
          <Message text='Hi!' />
          <Message text='Hi, Piter!' />
          <Message text='How are you?' />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;