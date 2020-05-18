import React, { useEffect, useState } from 'react';
import style from './Messages.module.css';
import DialogList from './DialogList/DialogList';
import MessageList from './Message/MessageList';
import Preloader from '../Common/Preloader/Preloader';


const Messages = (props) => {

  let [messageListVisible, setMessageListVisible]=useState(false);

  useEffect(() => {

    props.getDialogList()
  }, [props.getDialogs]

  );

  const toggleMessages=()=>{

    setMessageListVisible(true)
    
  }


  

  

  return (
    <div className={style.messages}>

      

      {(!messageListVisible) && <div>
        
        <DialogList  dialogList={props.dialogList} getMessageList={props.getMessageList}
        toggleMessages={toggleMessages}
        isDialog={props.isDialog}/>
        
      </div>}
      
      {(messageListVisible) && <div>

        <MessageList messageList={props.messageList} companionAvatar={props.companionAvatar}
        myId={props.myId} myAvatar={props.myAvatar} companionId={props.companionId}
        sendMessage={props.sendMessage} isMessage={props.isMessage} />

      </div>}

    </div>
  );
}

export default Messages;
