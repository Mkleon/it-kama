import React from 'react';
import MyPosts from './MyPosts';
import { addPostCreator, updateProfileTextCreator } from '../../../redux/profileReducer';
import StoreContext from './../../../StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
          const { newPost, posts } = store.getState().profilePage;
          const { dispatch } = store;
        
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
        }
      }
    </StoreContext.Consumer>
  );  
};

export default MyPostsContainer;