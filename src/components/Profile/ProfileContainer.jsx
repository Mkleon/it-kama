import React from 'react';
import Profile from './Profile';
import { getUserProfileThC } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 15053;
    this.props.getUserProfileThC(userId);
  }

  render() {
    return <Profile { ...this.props } profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

const mapDispatchToProps = {
  getUserProfileThC,
};

const withUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withUrlProfileContainer);