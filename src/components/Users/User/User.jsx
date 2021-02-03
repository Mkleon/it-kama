import React from 'react';
import classes from './User.module.css';

const User = (props) => {
    const {  name, country, city, avatar } = props.user;

    return (
        <div className={classes.user}>
            <img alt='avatar' src={avatar} />
            {`${name} || ${country} || ${city}  `}
            <a href='/'>Follow</a>
        </div>
    )
};

export default User;