import React from 'react';
import User from './User/User';

const Users = (props) => {
    if (props.users.allIds.length === 0) {
        props.setUsers([
            { id: 1, name: 'Piter', followed: false, location: { country: 'Russia', city: 'Tula' }, avatar: 'https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg' },
            { id: 5, name: 'Sergey', followed: false, location: { country: 'Belarus', city: 'Minsk' }, avatar: 'https://i.pinimg.com/originals/44/5e/fc/445efcdd7459264333a37ff0cf1febd1.jpg' },
            { id: 12, name: 'Sveta', followed: true, location: { country: 'Russia', city: 'Moscow' }, avatar: 'https://i.pinimg.com/736x/35/65/d6/3565d6559ee16e40137483c8391b5bf9.jpg' },
            { id: 14, name: 'Andrey', followed: true, location: { country: 'USA', city: 'Orlando' }, avatar: 'https://i.redd.it/6xgyra4ztzs41.png' },
        ]);
    }

    return (
        <div>
           {props.users.allIds.map((id) => <User user={props.users.byId[id]} follow={props.follow} unfollow={props.unfollow} key={id} />)}
        </div>
    )
};

export default Users;
