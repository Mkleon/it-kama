import React from 'react';
import Friends from './Friends';

const FriendsContainer = (props) => {
  const { friends, users } = props.store.getState(); 

  return <Friends friends={friends} users={users} />;
};

export default FriendsContainer;