import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  const { dialogsPage, profilePage, users, friends } = props.state;

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar friends={friends} users={users} />
      <div className='app-wrapper-content'>
        <Route path='/profile'>
          <Profile profilePage={profilePage} addPost={props.addPost} profileChangeText={props.profileChangeText} />
        </Route>
        <Route path='/dialogs'>
          <Dialogs dialogsPage={dialogsPage} users={users} />
        </Route>
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
};

export default App;
