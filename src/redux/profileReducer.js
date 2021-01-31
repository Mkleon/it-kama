const POST_ADD = 'POST_ADD';
const PROFILE_TEXT_UPDATE = 'PROFILE_TEXT_UPDATE';

const initialState = {
  posts:[
    { id: 1, text: 'Hi, How are you?', likesCount: 0 },
    { id: 2, text: 'It is my first post', likesCount: 25 },
  ],
  newPost: {
    text: '',
  }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ADD: {
      const { text } = state.newPost;
      const newPost = {
        id: 3,
        text,
        likesCount: 0,
      };

      state.posts.push(newPost);
      state.newPost.text = '';
      return state;
    }
    case PROFILE_TEXT_UPDATE: {
      state.newPost.text = action.text;
      return state;
    }
    default: {
      return state;
    }
  }
};

export const addPostCreator = () => ({
  type: POST_ADD,
});

export const updateProfileTextCreator = (text) => ({
  type: PROFILE_TEXT_UPDATE,
  text,
});

export default profileReducer;