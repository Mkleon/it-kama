import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followThC, unfollowThC, setTotalUsersCount, setPage, getUsersThC } from '../../redux/usersReducer';
import Preloader from '../common/Preloader/Preloader';
import { getUsers,
    getTotalCountPages,
    getCountPerPage,
    getCurrentPage,
    getIsFetching,
    getIsFollowingProgress
} from '../../redux/users-selectors';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        const { getUsersThC, currentPage, countPerPage } = this.props;
        getUsersThC(currentPage, countPerPage);
    }

    changePage = (page) => {
        const { getUsersThC, currentPage, countPerPage, setPage } = this.props;

        setPage(page);
        getUsersThC(currentPage, countPerPage);
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
        users: getUsers(state),
        totalCountPages: getTotalCountPages(state),
        countPerPage:  getCountPerPage(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state),
    }; 
};

const mapDispatchToProps = {
    followThC,
    unfollowThC,
    getUsersThC,
    setTotalUsersCount,
    setPage,
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
