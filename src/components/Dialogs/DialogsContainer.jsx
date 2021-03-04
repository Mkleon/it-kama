import Dialogs from './Dialogs';
import { addMessage, updateMessageText } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = {
  updateMessageText,  
  addMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);