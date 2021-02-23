import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setTotalUsersCount, setPage, togglePreloader } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { usersApi } from '../../api/api';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.togglePreloader(true);
        usersApi.getUsers(this.props.currentPage, this.props.countPerPage)
            .then((data) => {
                this.props.togglePreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    changePage = (page) => {
        this.props.setPage(page);
        this.props.togglePreloader(true);

        usersApi.getUsers(this.props.currentPage, this.props.countPerPage)
            .then((data) => {
                this.props.togglePreloader(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
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
