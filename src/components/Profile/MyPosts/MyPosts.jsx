import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {props.posts.map(({ id, text, likesCount }) => (
          <Post message={text} likesCount={likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;