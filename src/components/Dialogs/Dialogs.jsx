import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
          <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to='/dialogs/1'>Dima</NavLink>
          </div>
          <div className={classes.dialog}>
            <NavLink to='/dialogs/2'>Sasha</NavLink>
          </div>
          <div className={classes.dialog}>
            <NavLink to='/dialogs/3'>Sveta</NavLink>
          </div>
          <div className={classes.dialog}>
            <NavLink to='/dialogs/4'>Andrey</NavLink>
          </div>
        </div>
        <div className={classes.messages}>
          <div className={classes.message}>
            Hi!
          </div>
          <div className={classes.message}>
            Hi, Piter!
          </div>
          <div className={classes.message}>
            How are you?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;