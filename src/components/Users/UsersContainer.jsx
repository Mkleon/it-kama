import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followThC, unfollowThC, setTotalUsersCount, setPage, getUsersThC } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsersThC(this.props.currentPage, this.props.countPerPage);
    }

    changePage = (page) => {
        this.props.setPage(page);
        this.props.getUsersThC(this.props.currentPage, this.props.countPerPage);
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
                followThC={this.props.followThC}
                unfollowThC={this.props.unfollowThC}
                isFollowingProgress={this.props.isFollowingProgress}
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
        isFollowingProgress: state.users.isFollowingProgress,
    }; 
}

const mapDispatchToProps = {
    followThC,
    unfollowThC,
    getUsersThC,
    setTotalUsersCount,
    setPage,
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
