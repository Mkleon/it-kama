import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import classes from './Profile.module.css';

const Profile = (props) => {
  const { posts } = props.profilePage;

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />         
    </div>
  );
};

export default Profile;