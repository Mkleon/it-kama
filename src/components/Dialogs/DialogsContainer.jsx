import Dialogs from './Dialogs';
import { addMessageCreator, updateMessageTextCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessageText: (text) => dispatch(updateMessageTextCreator(text)),  
    addMessage: () => dispatch(addMessageCreator()),
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;