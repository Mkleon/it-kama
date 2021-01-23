import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img className={classes.banner} alt='peru' src='https://im0-tub-ru.yandex.net/i?id=3ee12bfb49fb9fd3670cf996dac7e0ab&n=13'/>
      </div>
      <div>
        ava
      </div>
      <MyPosts />         
    </div>
  );
};

export default Profile;