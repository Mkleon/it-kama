import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogs = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Sergey' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Andrey' },
];

const messages = [
  { id: 1, text: 'Hi!' },
  { id: 2, text: 'Hi, Piter!' },
  { id: 3, text: 'How are you?' },
]

const posts = [
  { id: 1, text: 'Hi, How are you?', likesCount: 0 },
  { id: 2, text: 'It is my first post', likesCount: 25 },
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
