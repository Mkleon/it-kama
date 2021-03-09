import MyPosts from './MyPosts';
import { addPostCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newPost: state.profilePage.newPost,
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newMessage) => dispatch(addPostCreator(newMessage)),
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;