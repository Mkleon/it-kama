import React from 'react';
import Profile from './Profile';
import { getUserProfileThC } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import withAuthRedirect from '../hoc/withAuthRedirect';

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
});

const mapDispatchToProps = {
  getUserProfileThC,
};

const authRedirect = withAuthRedirect(ProfileContainer)
const withUrlProfileContainer = withRouter(authRedirect);

export default connect(mapStateToProps, mapDispatchToProps)(withUrlProfileContainer);