import React from 'react';
import classes from './User.module.css';
import userMock from '../../../assets/images/user-mock.png';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

const User = (props) => {
    const {  id, name, photos: { small }, followed } = props.user;

    const handleUnfollow = (userId) => (e) => {
        e.preventDefault();
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {
            withCredentials: true,
            headers: {
                "API-KEY": "664ee9c8-55d9-4748-9e25-f160062b257e",
            }
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    props.unfollow(id);
                }
            });
    };

    const handleFollow = (userId) => (e) => {
        e.preventDefault();
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
        {
            withCredentials: true,
            headers: {
                "API-KEY": "664ee9c8-55d9-4748-9e25-f160062b257e",
            }
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
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