import React from 'react';
import Profile from './Profile';
import { getUserProfileThC, getUserStatusThC, updateUserStatusThC } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId ? this.props.match.params.userId : 15053;
    this.props.getUserProfileThC(userId);
    this.props.getUserStatusThC(userId);
  }

  render() {
    return <Profile { ...this.props } 
      profile={this.props.profile}
      status={this.props.status}
      updateUserStatusThC={this.props.updateUserStatusThC}
    />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

const mapDispatchToProps = {
  getUserProfileThC,
  getUserStatusThC,
  updateUserStatusThC,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect,
)(ProfileContainer);