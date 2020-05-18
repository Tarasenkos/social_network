import React from 'react';
import style from './Person.module.css';
import userPhoto from '../../../../../Assets/Images/user.jpg'
import { NavLink } from 'react-router-dom';
import Preloader from '../../../Common/Preloader/Preloader';

/* формирует одну позицию для списка собеседников со ссылкой */

const Person = (props) => {

  function messageDate() {


    let day = String(props.lastMessageDate).slice(8, 10)
    let monthNum = Number(String(props.lastMessageDate).slice(5, 7))
    let month = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
    let year = String(props.lastMessageDate).slice(0, 4)
    let date = [day, month[monthNum - 1], year].join(' ')

    return date

  }

  const getMessages = () => {

    return (
      
      props.getMessageList(props.id, true),
      props.toggleMessages()

    )
  }

  return (
    <NavLink className={style.link} to={`/dialog/${props.id}`}>
    <div onClick={()=>getMessages(props.id)} className={style.dialog_item_wrap}>
      <div className={style.item_photo_wrap}>
        <div className={style.item_photo_wrap_outer}>
          <NavLink to={'/profile/' + props.id}>
            <img src={props.avatar || userPhoto} />
          </NavLink>
        </div>
      </div>
      <div className={style.item_info_wrap}>
        <div className={style.item_info}>
          <div className={style.item_date}>{messageDate()}</div>
          <div className={style.link}>
            <div className={style.item}>{props.name}</div>
          </div>
          {(!props.newMessage) ||
            (<div className={style.new_message}>{props.newMessage}</div>)}
        </div>
      </div>

    </div>
    </NavLink>
  );
}

export default Person;
