import Dialogs from './Dialogs';
import { addMessage } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessage) => dispatch(addMessage(newMessage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);