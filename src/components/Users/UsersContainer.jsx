import Users from './Users';
import { connect } from 'react-redux';
import { followCreator, unfollowCreator, setUsersCreator, setTotalUsersCountCreator, setPageCreator } from '../../redux/usersReducer';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;