const initialState = {
  byId: {
    1: { id: 1, name: 'Piter', country: 'Russia', city: 'Tula', avatar: 'https://www.popsci.com/resizer/oBw2zifFCqH3deU6vy2bPRSG99Q=/760x456/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/WMD5M52LJFBEBIHNEEABHVB6LA.jpg' },
    5: { id: 5, name: 'Sergey', country: 'Belarus', city: 'Minsk', avatar: 'https://i.pinimg.com/originals/44/5e/fc/445efcdd7459264333a37ff0cf1febd1.jpg' },
    12: { id: 12, name: 'Sveta', country: 'Russia', city: 'Moscow', avatar: 'https://i.pinimg.com/736x/35/65/d6/3565d6559ee16e40137483c8391b5bf9.jpg' },
    14: { id: 14, name: 'Andrey', country: 'USA', city: 'Orlando', avatar: 'https://i.redd.it/6xgyra4ztzs41.png' },
  },
  allIds: [1, 5, 12, 14],
};

const usersReducer = (state = initialState, action) => {

  return state;
};

export default usersReducer;