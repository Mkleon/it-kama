import React from 'react';
import classes from './User.module.css';
import userMock from '../../../assets/images/user-mock.png';
import { NavLink } from 'react-router-dom';
import { followApi } from '../../../api/api';

const User = (props) => {
    const {  id, name, photos: { small }, followed } = props.user;

    const handleUnfollow = (userId) => (e) => {
        e.preventDefault();

        followApi.setUnfollow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    props.unfollow(id);
                }
            });
    };

    const handleFollow = (userId) => (e) => {
        e.preventDefault();
    
        followApi.setFollow(userId)
            .then((data) => {
                debugger
                if (data.resultCode === 0) {
                    props.follow(id);
                }
            });
    };

    return (
        <div className={classes.user}>
            <NavLink to={'/profile/'+ id}>
                <img alt='small' src={(small !== null) ? small : userMock } />
            </NavLink>
            {`${name} `}
            {(followed)
                ? <a href='/' onClick={handleUnfollow(id)}>Unfollow</a>
                : <a href='/' onClick={handleFollow(id)}>Follow</a>
            }
        </div>
    )
};

export default User;