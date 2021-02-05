import Users from './Users';
import { connect } from 'react-redux';
import { followCreator, unfollowCreator, setUsersCreator } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }; 
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followCreator(userId)),
        unfollow: (userId) => dispatch(unfollowCreator(userId)),
        setUsers: (users) => dispatch(setUsersCreator(users)),
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;