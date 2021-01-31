const POST_ADD = 'POST_ADD';
const PROFILE_TEXT_UPDATE = 'PROFILE_TEXT_UPDATE';

const profileReducer = (state, action) => {
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