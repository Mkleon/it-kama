import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
  const { updateProfileText, addPost, newPost } = props;

  const handleChange = (e) => {
    e.preventDefault();
    const text = e.target.value;
    updateProfileText(text);
  }

  const handleClick = () => {
    addPost();
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={handleChange} value={newPost.text}></textarea>
        </div>
        <div>
          <button onClick={handleClick}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {props.posts.map(({ id, text, likesCount }) => (
          <Post key={id} message={text} likesCount={likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;