import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setTotalUsersCount, setPage, togglePreloader } from '../../redux/usersReducer';
import * as axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.togglePreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countPerPage}`)
            .then((response) => {
                this.props.togglePreloader(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    changePage = (page) => {
        this.props.setPage(page);
        this.props.togglePreloader(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.countPerPage}`)
            .then((response) => {
                this.props.togglePreloader(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                changePage={this.changePage}
                totalCountPages={this.props.totalCountPages}
                countPerPage={this.props.countPerPage}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>);
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
        totalCountPages: state.users.totalCountPages,
        countPerPage:  state.users.countPerPage,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    }; 
}

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    setPage,
    togglePreloader,
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
