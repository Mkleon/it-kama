import React from 'react';
import User from './User/User';
import * as axios from 'axios';

const Users = (props) => {
    if (props.users.allIds.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                props.setUsers(response.data.items);
            });
    }

    return (
        <div>
           {props.users.allIds.map((id) => <User user={props.users.byId[id]} follow={props.follow} unfollow={props.unfollow} key={id} />)}
        </div>
    )
};

export default Users;
