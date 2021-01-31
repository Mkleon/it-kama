import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateProfileTextCreator } from '../../../redux/profileReducer';

const MyPostsContainer = (props) => {
  const { newPost, posts } = props.store.getState().profilePage;
  const { dispatch } = props.store;

  const updateProfileText = (text) => {
    dispatch(updateProfileTextCreator(text));
  }

  const addPost = () => {
    dispatch(addPostCreator());
  };

  return <MyPosts
    updateProfileText={updateProfileText}
    addPost={addPost}
    posts={posts}
    newPost={newPost}
  />;
};

export default MyPostsContainer;