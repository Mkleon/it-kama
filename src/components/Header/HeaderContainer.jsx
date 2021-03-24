import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header { ...this.props } />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    id: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);