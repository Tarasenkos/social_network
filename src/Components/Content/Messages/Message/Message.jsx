import React, { useState } from 'react';
import style from './Message.module.css';
import userPhoto from '../../../../Assets/Images/user.jpg';
import { NavLink } from 'react-router-dom';


/* формирует шаблон одного сообщения */


const Message = (props) => {


  function textIntoHTML() {
    return { __html: props.message };
  }

  function time() {

    const d1 = new Date(String(props.date));


    //alert(d1.getTimeZoneOffset(props.time))

    let hours = Number(String(props.date).slice(11, 13))
    let minutes = String(props.date).slice(14, 16)

    return [hours + 3, minutes].join(':')


  }

  function today(gap=0) {

    let today = new Date();

    let day = (Number(today.getDate())+gap);
    let monthNum = Number(today.getMonth());
    let year = Number(today.getFullYear());
    let month = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

    return [day, month[monthNum], year].join(' ')

  }

  function formatDate(date) {

    let day = String(date).slice(8, 10)
    let monthNum = Number(String(date).slice(5, 7))
    let month = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
    let year = String(date).slice(0, 4)
    
    return [day, month[monthNum - 1], year].join(' ')



  }


  function date() {


    let newMessageDate = String(props.date).slice(0, 10)
    let lastMessageDate = String(props.previousMessageDate).slice(0, 10)

    let messageDate = (newMessageDate !== lastMessageDate)
      ? formatDate(newMessageDate) :null

    
    if (messageDate==today()) {date='Сегодня'}
    else if (messageDate==today(-1)) {date='Вчера'}
    else if (String(today()).slice(7, 11)==String(messageDate).slice(7, 11))
     {date=String(messageDate).slice(0, 6)}
     else {date=messageDate}

    

    return date
  }

  return (
    
    <div className={props.viewed ? style.message_wrap : style.unread}>
      
     
      <div className={style.date}><span>{date()}</span></div>
      
      <div className={style.photo_wrap}>
        <div className={style.photo_wrap_outer}>
          <NavLink to={'/profile/' + props.senderId}>
            <img src={(props.senderId === props.myId)
              ? (props.myAvatar || userPhoto)
              : (props.companionAvatar || userPhoto)} />
          </NavLink>

        </div>
      </div>

      <div className={style.content_wrap}>
        <div className={style.info}>
          <div className={style.name_line}>

            <NavLink className={style.name} to={'/profile/' + props.senderId}>
              {props.name}
            </NavLink>
            <span className={style.time}>{time()}</span>

          </div>
          <div className={style.message}>
            <div dangerouslySetInnerHTML={textIntoHTML()} />
          </div >
        </div>
      </div>
    </div >








  );
}

export default Message;
