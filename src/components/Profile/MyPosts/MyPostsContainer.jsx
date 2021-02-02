import MyPosts from './MyPosts';
import { addPostCreator, updateProfileTextCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newPost: state.profilePage.newPost,
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProfileText: (text) => dispatch(updateProfileTextCreator(text)),
    addPost: () => dispatch(addPostCreator()),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;