import React from 'react';
import SendReduxForm from '../../../Forms/SendReduxForm';
import userPhoto from '../../../../../Assets/Images/user.jpg';
import style from './SendInstantMessage.module.css';

const SendInstantMessage =(props) =>{


    const onSubmit=(formData)=>{

        return (    
        
            props.sendMessage(props.userId, formData.message),
            props.closeWindow()
       
        )
  
    }

    return (
        <div className={style.form_container}>
            <div className={style.form_header_wrap}>

                <div className={style.form_header}>Новое сообщение</div>
                <div onClick={props.closeWindow} className={style.form_header_close}>Закрыть</div>
            </div>
            <div className={style.form_wrap}>
                <div className={style.user_wrap}>
                    <div className={style.user_avatar} onClick={props.closeWindow}>
                        <img src={props.photoSmall || userPhoto} />
                    </div>
                    <div onClick={props.closeWindow} className={style.user_name}>
                        {props.userName}
                    </div>

                </div>
                <SendReduxForm  photoSmall={props.photoSmall} 
                                userName={props.userName} userId={props.userId} 
                                onSubmit={onSubmit} closeWindow={props.closeWindow}/>
            </div>
        </div>
        
        
    )
}

export default SendInstantMessage;