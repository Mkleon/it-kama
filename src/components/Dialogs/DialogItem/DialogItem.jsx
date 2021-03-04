import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './DialogItem.module.css';

const DialogItem = (props) => {
  const { id, name } = props.dialog;
  const path = `/dialogs/${id}`;

  return (
    <div key={id} className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;