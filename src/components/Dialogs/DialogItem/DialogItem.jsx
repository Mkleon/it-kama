import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
  const { id, userId } = props.dialog;
  const { name, avatar } = props.users[userId];
  const path = `/dialogs/${id}`;

  return (
    <div key={id} className={classes.dialog + ' ' + classes.active}>
      <img src={avatar} alt='avatar' />
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;