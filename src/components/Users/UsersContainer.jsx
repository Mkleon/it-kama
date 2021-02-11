import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followCreator, unfollowCreator, setUsersCreator, setTotalUsersCountCreator, setPageCreator } from '../../redux/usersReducer';
import * as axios from 'axios';

class UsersAPIComponent extends React.Component {
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
        return <Users
            changePage={this.changePage}
            totalCountPages={this.props.totalCountPages}
            countPerPage={this.props.countPerPage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />;
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
        totalCountPages: state.users.totalCountPages,
        countPerPage:  state.users.countPerPage,
        currentPage: state.users.currentPage,
    }; 
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followCreator(userId)),
        unfollow: (userId) => dispatch(unfollowCreator(userId)),
        setUsers: (users) => dispatch(setUsersCreator(users)),
        setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountCreator(totalCount)),
        setPage: (page) => dispatch(setPageCreator(page)),
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
