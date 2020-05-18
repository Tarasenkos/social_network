import React from 'react';
import Messages from './Messages';
import { getDialogList, getMessageList,sendMessage,
   } from '../../../Redux/DialogsReducer';
import { connect } from 'react-redux';
import { WithAuthRedirect } from '../../../Hoc/WithAuthRedirect';
import { compose } from 'redux';




const mapStateToProps = (state) => {
  return {
    dialogList: state.dialogsPage.dialogList,
    messageList: state.dialogsPage.messageList,
    companionAvatar: state.dialogsPage.companionAvatar,
    companionId: state.dialogsPage.companionId,
    myId: state.authData.id,
    myAvatar: state.authData.myProfile.photos.small,
    isDialog: state.dialogsPage.isDialog,
    isMessage: state.dialogsPage.isMessage,
    

  }
}

const mapDispatchToProps = {

  getDialogList, getMessageList, sendMessage

}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect)(Messages);



