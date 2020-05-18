import React, { useState } from 'react';
import userPhoto from '../../../../Assets/Images/user.jpg';
import style from './ProfileInfo.module.css';
import SendInstantMessage from './InstantMessage/SendInstantMessage'





const Avatar = (props) => {

    const [modalVisible, setModalStyle] = useState(false)

    const onSelectFile = () => {


        let input = document.createElement('input');
        input.type = 'file';

        input.onchange = (e) => {
            let file = e.target.files[0];
            props.uploadImage(file);
        }

        input.click();
    }

    const modalVisibleOn = () => {


        return (
            setModalStyle(true),
            props.startChatting(props.userId)

        )
    }

    const modalVisibleOff = () => {

        return (
            setModalStyle(false)

        )
    }


    const onEscape = (e)=>{
       
 if (e.keyCode === 27)  modalVisibleOff()
   
}

    return (


        <div onKeyDown={onEscape} className={style.avatar}>
            <div>
                <img src={props.photo || userPhoto} />
            </div>
            <div className={style.controls}>
                <div className={style.button_wrap}>
               {(!props.isAuth) || ((props.isMe)
                        //shows select-file window to upload avatar
                        ? <button className={style.button}
                            onClick={onSelectFile}>Сменить фото</button>
                        //shows modal window to send message        
                        : <button className={style.button}
                            onClick={modalVisibleOn}>Написать сообщение</button>

               )}
                </div>
            </div>


            {modalVisible &&
                <div className={style.modal_wrap}>
                    <div onClick={modalVisibleOff} className={style.modal}></div>
                    
                    <SendInstantMessage photoSmall={props.photoSmall} userId={props.userId}
                    userName={props.userName} closeWindow={modalVisibleOff} 
                    sendMessage={props.sendMessage}/>
                    
                </div>}
        </div>
    )


}


export default Avatar