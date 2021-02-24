import React from 'react';
import classes from './User.module.css';
import userMock from '../../../assets/images/user-mock.png';
import { NavLink } from 'react-router-dom';
import { followApi } from '../../../api/api';

const User = (props) => {
    const {  id, name, photos: { small }, followed } = props.user;
    const { isFollowingProgress, toggleIsFollowingProgress } = props;

    const handleUnfollow = (userId) => (e) => {
        e.preventDefault();
        toggleIsFollowingProgress(true, userId);

        followApi.setUnfollow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    props.unfollow(id);
                }
                toggleIsFollowingProgress(false, userId);
            });
    };

    const handleFollow = (userId) => (e) => {
        e.preventDefault();
        toggleIsFollowingProgress(true, userId);

        followApi.setFollow(userId)
            .then((data) => {
                if (data.resultCode === 0) {
                    props.follow(id);
                }
                toggleIsFollowingProgress(false, userId);
            });
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