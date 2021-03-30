import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = ({ profile, status, updateUserStatusThC }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img className={classes.banner} alt='peru' src='https://im0-tub-ru.yandex.net/i?id=3ee12bfb49fb9fd3670cf996dac7e0ab&n=13' />
      </div>
      <div className={classes.dscriptionBlock}>
        <img alt='large_photo' src={profile.photos.large} />
      </div>
      <ProfileStatus status={status || '----'} updateUserStatusThC={updateUserStatusThC} />
    </div>
  );
};

export default ProfileInfo;