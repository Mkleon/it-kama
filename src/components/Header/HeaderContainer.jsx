import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserAuthData } from '../../redux/authReducer';
import { authApi } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount(){
    authApi.getAuthMe()
      .then((data) => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data;
          this.props.setUserAuthData(id, email, login);
        }
      });
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
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = {
  setUserAuthData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);