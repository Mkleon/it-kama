import React from 'react';
import classes from './Friend.module.css';

const Friend = (props) => {
  const { name, avatar } = props.user;

  return (
    <div className={classes.friend}>
      <img src={avatar} alt="friend" />
      {name}
    </div>
  );
};

export default Friend;