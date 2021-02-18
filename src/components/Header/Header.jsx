import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
  const { isAuth, login, id } = props;

  return (
    <header className={classes.header}>
      <img alt='logo' src='https://www.logodesign.net/images/logo.png' />
      <div className={classes.loginBlock}>
        {isAuth
          ? <NavLink to={`/profile/${id}`}>{login}</NavLink>
          : <NavLink to='/login'>Sign in</NavLink>}
      </div>
    </header>
  );
};

export default Header;