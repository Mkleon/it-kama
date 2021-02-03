import React from 'react';
import User from './User/User';

const Users = (props) => {
    return (
        <div>
            {props.users.map((user) => <User user={user} key={user.id} />)}
        </div>
    )
};

export default Users;
