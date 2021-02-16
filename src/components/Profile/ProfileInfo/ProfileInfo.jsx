import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img className={classes.banner} alt='peru' src='https://im0-tub-ru.yandex.net/i?id=3ee12bfb49fb9fd3670cf996dac7e0ab&n=13' />
      </div>
      <div className={classes.dscriptionBlock}>
        <img alt='large_photo' src={props.profile.photos.large} />
      </div>
    </div>
  );
};

export default ProfileInfo;