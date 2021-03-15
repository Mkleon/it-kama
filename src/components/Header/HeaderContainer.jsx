import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMeThC, logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
  componentDidMount(){
    this.props.authMeThC();
  }
  
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
  authMeThC,
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);