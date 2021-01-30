import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import { addPostActionCreator, updateProfileTextActionCreator } from './../../../redux/state';

const MyPosts = (props) => {
  const newPostElement = React.createRef();
  const { dispatch, newPost } = props;

  const handleChange = (e) => {
    e.preventDefault();
    const text = newPostElement.current.value;
    dispatch(updateProfileTextActionCreator(text));
  }

  const handleClick = () => {
    dispatch(addPostActionCreator());
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={handleChange} value={newPost.text}></textarea>
        </div>
        <div>
          <button onClick={handleClick}>Add post</button>
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