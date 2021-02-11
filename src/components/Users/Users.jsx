import React from 'react';
import User from './User/User';
import * as axios from 'axios';
import classes from './Users.module.css';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countPerPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    changePage = (page) => {
        this.props.setPage(page);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.countPerPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        const pageNumbers = [];
        const pagesCount = Math.ceil(this.props.totalCountPages / this.props.countPerPage);

        for (let i = 1; i <= pagesCount; i += 1) {
            pageNumbers.push(i);
        }

        return (
            <div>
                <div>
                    {pageNumbers.map((num) => <span className={(this.props.currentPage === num) ? classes.currentPage : ''} onClick={(e) => { this.changePage(num); }}>{num + '  '}</span>)}
                </div>
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
