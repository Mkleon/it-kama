import Friends from './Friends';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    users: state.users,
  }
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;