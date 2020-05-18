import React from 'react';
import data from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';
import MyStatus from './MyStatus';
import Avatar from './Avatar';



const ProfileInfo = (props) => {

  function textIntoHTML() {
    return { __html: props.profile.aboutMe }}


  if (!props.profile) {
    return <Preloader />
  }

  return (

    <div className={data.profileinfo}>

      <Avatar photo={props.profile.photos.large} photoSmall={props.profile.photos.small}
        userId={props.profile.userId} userName={props.profile.fullName}
        uploadImage={props.uploadImage} isMe={props.isMe}
        startChatting={props.startChatting} sendMessage={props.sendMessage}
        isAuth={props.isAuth} />



      <div className={data.info_wrapper}>
        <div className={data.info}>
          <div className={data.name}>
            {props.profile.fullName}
          </div>

          {(props.isMe)
            ? <div className={data.my_status}>

              <MyStatus {...props} />

            </div>
            : <div className={data.user_status}>

              {props.status}

            </div>}

        </div>
        <div className={data.about}>
          
            <div className={data.about_header}>
              Обо мне:
            </div>
          
          
          <div  className={data.about_info} dangerouslySetInnerHTML={textIntoHTML()} />
            

        </div>

    </div>
  </div>



  );
}

export default ProfileInfo;
