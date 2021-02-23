import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { profileApi } from '../../api/api';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 2;

    profileApi.getUserProfile(userId)
      .then((data) => {
        this.props.setUserProfile(data);
      });
  }

  render() {
    return <Profile { ...this.props } profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

const mapDispatchToProps = {
  setUserProfile,
};

const withUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(withUrlProfileContainer);