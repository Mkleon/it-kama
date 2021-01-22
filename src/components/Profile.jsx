import React from 'react';
import classes from './Content.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img alt='peru' src='https://im0-tub-ru.yandex.net/i?id=3ee12bfb49fb9fd3670cf996dac7e0ab&n=13'/>
      </div>
      <div>
        ava
      </div>
      <div>
        posts
        <div>Music
Settings
        new post
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>
            post 1
          </div>
          <div className={classes.item}>
            post 1
          </div>
        </div>
      </div>          
    </div>
  );
};

export default Profile;