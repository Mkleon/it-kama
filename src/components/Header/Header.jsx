import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  const { isLogin, login, id } = props;

  return (
    <header className={classes.header}>
      <img alt='logo' src='https://www.logodesign.net/images/logo.png' />
      <div className={classes.login}>
        {isLogin
          ? <NavLink to={`/profile/${id}`}>{login}</NavLink>
          : <NavLink to='/'>Sign in</NavLink>}
      </div>
    </header>
  );
};

export default Header;