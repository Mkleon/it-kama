import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';

const Users = ({ currentPage, totalItemsCount, countPerPage, changePage, ...props }) => {
    return (
        <div>
            <Paginator 
                currentPage={currentPage}
                totalItemsCount={totalItemsCount}
                countPerPage={countPerPage}
                changePage={changePage}
            />
            {props.users.allIds.map((id) => <User
                user={props.users.byId[id]}
                followThC={props.followThC}
                unfollowThC={props.unfollowThC}
                key={id}
                isFollowingProgress={props.isFollowingProgress}
                toggleIsFollowingProgress={props.toggleIsFollowingProgress}
            />)}
        </div>
    );
};

export default Users;
