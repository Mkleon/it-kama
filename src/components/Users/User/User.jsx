import React from 'react';
import classes from './User.module.css';
import userMock from '../../../assets/images/user-mock.png';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    const {  id, name, photos: { small }, followed } = props.user;

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
            <NavLink to={'/profile/'+ id}>
                <img alt='small' src={(small !== null) ? small : userMock } />
            </NavLink>
            {`${name} `}
            {(followed)
                ? <a href='/' onClick={handleUnfollow}>Unfollow</a>
                : <a href='/' onClick={handleFollow}>Follow</a>
            }
        </div>
    )
};

export default User;