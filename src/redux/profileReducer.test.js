import profileReducer, { addPostCreator, deletePostCreator } from "./profileReducer";

const state = {
  posts:[
    { id: 1, text: 'Hi, How are you?', likesCount: 0 },
    { id: 2, text: 'It is my first post', likesCount: 25 },
  ],
};

it('length of posts should be incremented', () => {
  const action = addPostCreator('newTestMessage');
  const result = profileReducer(state, action);
  expect(result.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
  const action = addPostCreator('newTestMessage');
  const result = profileReducer(state, action);
  expect(result.posts[2].text).toBe('newTestMessage');
});

it('length of posts should be decremented', () => {
  const action = deletePostCreator(1);
  const result = profileReducer(state, action);
  expect(result.posts.length).toBe(2);
});