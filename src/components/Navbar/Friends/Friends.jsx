import React from 'react';
import Friend from './Friend/Friend';

const Friends = (props) => {
  return (
    <div>
      <h3>Friends</h3>
      {props.friends.map((id, index) => <Friend key={index} user={props.users[id]} />)}
    </div>
  );
};

export default Friends;