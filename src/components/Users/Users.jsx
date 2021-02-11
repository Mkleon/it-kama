import React from 'react';
import User from './User/User';
import classes from './Users.module.css';

const Users = (props) => {
    const pageNumbers = [];
    const pagesCount = Math.ceil(props.totalCountPages / props.countPerPage);

    for (let i = 1; i <= pagesCount; i += 1) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <div>
                {pageNumbers.map((num) => <span className={(props.currentPage === num) ? classes.currentPage : ''} onClick={(e) => { props.changePage(num); }}>{num + '  '}</span>)}
            </div>
            {props.users.allIds.map((id) => <User 
                user={props.users.byId[id]}
                follow={props.follow}
                unfollow={props.unfollow} key={id}
            />)}
        </div>
    )

};

export default Users;
