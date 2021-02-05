import React from 'react';
import classes from './User.module.css';

const User = (props) => {
    const {  id, name, location: { country, city }, avatar, followed } = props.user;

    const handleUnfollow = (e) => {
        e.preventDefault();
        props.unfollow(id);
    };

    const handleFollow = (e) => {
        e.preventDefault();
        props.follow(id);
    };

    return (
        <div className={classes.user}>
            <img alt='avatar' src={avatar} />
            {`${name} || ${country} || ${city}  `}
            {(followed)
                ? <a href='/' onClick={handleUnfollow}>Unfollow</a>
                : <a href='/' onClick={handleFollow}>Follow</a>
            }
        </div>
    )
};

export default User;