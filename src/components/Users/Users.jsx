import React from 'react';
import User from './User/User';
import * as axios from 'axios';

class Users extends React.Component {
    constructor(props) {
        super(props);
        alert('dsfs');
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items);
            });

    }

    render() {
        return (
            <div>
                {this.props.users.allIds.map((id) => <User 
                    user={this.props.users.byId[id]}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow} key={id}
                />)}
            </div>
        )
    }
};

export default Users;
