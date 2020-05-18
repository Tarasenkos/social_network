import React, { useState } from 'react';
import DialogReduxForm from '../../Forms/DialogForm';
import Message from './Message';
import style from './Message.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import { reset } from 'redux-form';


const MessageList = (props) => {

    

    const sendMessage=(formData, dispatch)=>{
        
        props.sendMessage(props.companionId, formData.message)
        dispatch(reset('dialogForm'))
       
    
    }
    

    

           
            if (!props.isMessage)  { 
                return <Preloader/>
            }
            
            let messageList=[]
            
        /*Создаем массив руками, чтобы передать внутрь дату предыдущего сообщения*/
            for (let i=0; i<props.messageList.length; i++) {
                
                let m=props.messageList[i]

                messageList[i]=<Message messageId={m.id} date={m.addedAt} senderId={m.senderId}
            recipientId={m.recipientId} name={m.senderName} message={m.body}
            companionAvatar={props.companionAvatar} myId={props.myId} viewed={m.viewed} 
            myAvatar={props.myAvatar} key={m.id} 
            previousMessageDate={i>0 ? props.messageList[i-1].addedAt:''}/>

            }
        

    return (
        <div  className={style.messageList}>
            <div className={style.messageList_header}/>
            <div className={style.messages_area}>{messageList}</div>
            <div className={style.messageList_footer}>
            <DialogReduxForm onSubmit={sendMessage}/>
            </div>
        </div>
    )

}


export default MessageList;