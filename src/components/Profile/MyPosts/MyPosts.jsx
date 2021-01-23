import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        new post
      </div>
      <div className={classes.posts}>
        <Post message='Hi, How are you?' likesCount='0' />
        <Post message='It is my first post' likesCount='25' />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;