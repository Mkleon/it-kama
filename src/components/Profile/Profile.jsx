import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  const { posts, newPost } = props.profilePage;

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} newPost={newPost} addPost={props.addPost} profileChangeText={props.profileChangeText} />         
    </div>
  );
};

export default Profile;