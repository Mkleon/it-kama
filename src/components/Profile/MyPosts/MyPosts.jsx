import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
  const newPostElement = React.createRef();
  const { addPost } = props;

  const handleClick = () => {
    const text = newPostElement.current.value;
    addPost(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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