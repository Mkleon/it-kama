import React from 'react';
import classes from './User.module.css';
import userMock from '../../../assets/images/user-mock.png';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    const {  id, name, photos: { small }, followed } = props.user;
    const { isFollowingProgress, followThC, unfollowThC } = props;

    const handleUnfollow = (userId) => (e) => {
        e.preventDefault();
        unfollowThC(userId);
    };

    const handleFollow = (userId) => (e) => {
        e.preventDefault();
        followThC(userId);
    };

    return (
        <div className={classes.user}>
            <NavLink to={'/profile/'+ id}>
                <img alt='small' src={(small !== null) ? small : userMock } />
            </NavLink>
            {`${name} `}
            {(followed)
                ? <button disabled={isFollowingProgress.some((uid) => uid === id)} onClick={handleUnfollow(id)}>Unfollow</button>
                : <button disabled={isFollowingProgress.some((uid) => uid === id)} onClick={handleFollow(id)}>Follow</button>
            }
        </div>
    )
};

export default User;