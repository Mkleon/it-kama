import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type='text' component='textarea' name='message' onChange={props.handleChange} />
      </div>
      <div>
        <button type='submit'>Add post</button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({ form: 'addMessagePost' })(AddMessageForm);

const MyPosts = (props) => {
  const { updateProfileText, addPost, newPost } = props;

  const handleChange = (text) => {
    updateProfileText(text);
  }

  const handleClick = (values) => {
    alert(values.message);
    // addPost();
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddMessageReduxForm onSubmit={handleClick} onChange={handleChange} />

      <div className={classes.posts}>
        {props.posts.map(({ id, text, likesCount }) => (
          <Post key={id} message={text} likesCount={likesCount} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;