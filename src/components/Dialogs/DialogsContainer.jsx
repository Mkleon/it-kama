import React from 'react';
import Dialogs from './Dialogs';
import { addMessageCreator, updateMessageTextCreator } from '../../redux/dialogsReducer';
import { getUsersThC } from '../../redux/usersReducer';
import { connect } from 'react-redux';

class DialogsContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThC(this.props.currentPage, this.props.countPerPage);
  }

  render() {
    return <Dialogs {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    users: state.users,
    countPerPage:  state.users.countPerPage,
    currentPage: state.users.currentPage,
  };
};

const mapDispatchToProps = {
  updateMessageTextCreator,  
  addMessageCreator,
  getUsersThC
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);