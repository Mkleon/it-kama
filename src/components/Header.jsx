import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img alt='logo' src='https://www.logodesign.net/images/logo.png' />
    </header>
  );
};

export default Header;