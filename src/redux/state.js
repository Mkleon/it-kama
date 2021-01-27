const state = {
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Sergey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Andrey' },
    ],      
    messages: [
      { id: 1, text: 'Hi!' },
      { id: 2, text: 'Hi, Piter!' },
      { id: 3, text: 'How are you?' },
    ],
  },
  profilePage: {
    posts:[
      { id: 1, text: 'Hi, How are you?', likesCount: 0 },
      { id: 2, text: 'It is my first post', likesCount: 25 },
    ],
  },
};

export default state;