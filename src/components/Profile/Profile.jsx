import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { posts, newPost } = props.profilePage;

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} newPost={newPost} dispatch={props.dispatch} />         
    </div>
  );
};

export default Profile;