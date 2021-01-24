import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={classes.banner} alt='peru' src='https://im0-tub-ru.yandex.net/i?id=3ee12bfb49fb9fd3670cf996dac7e0ab&n=13' />
      </div>
      <div className={classes.dscriptionBlock}>
        ava
      </div>
    </div>
  );
};

export default ProfileInfo;