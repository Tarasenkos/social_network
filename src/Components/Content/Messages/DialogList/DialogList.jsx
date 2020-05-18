import React from 'react';
import style from './DialogList.module.css';
import Person from './Person/Person';
import Preloader from '../../Common/Preloader/Preloader';



/* Формирует список/массив собеседников */

const DialogList = (props) => {

  let DialogItems = props.dialogList.map((P) => <Person name={P.userName} key={P.id}
    avatar={P.photos.small} id={P.id} lastMessageDate={P.lastDialogActivityDate}
    newMessage={P.newMessagesCount} getMessageList={props.getMessageList}
    toggleMessages={props.toggleMessages}/>);

    if (!props.isDialog)  {
      return <Preloader/>
    }

  return (

    <div className={style.dialogList}>
      <div className={style.dialogList_header}></div>
      <div className={style.dialogs}>{DialogItems}</div>
      <div className={style.dialogList_footer}></div>
    </div>
  );
}

export default DialogList;
