import React from 'react';
import Friends from './Friends';
import StoreContext from './../../../StoreContext';

const FriendsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
          const { friends, users } = store.getState(); 

          return <Friends friends={friends} users={users} />;
        }
      }
    </StoreContext.Consumer>
  );
};

export default FriendsContainer;