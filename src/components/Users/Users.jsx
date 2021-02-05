import React from 'react';
import User from './User/User';

const Users = (props) => {
    return (
        <div>
           {props.users.allIds.map((id) => <User user={props.users.byId[id]} follow={props.follow} unfollow={props.unfollow} key={id} />)}
        </div>
    )
};

export default Users;
