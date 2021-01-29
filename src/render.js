import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, profileChangeText, addMessage, updateMessageText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App 
          state={state}
          addPost={addPost}
          profileChangeText={profileChangeText}
          addMessage={addMessage}
          updateMessageText={updateMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};
