import React from 'react';
import data from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';

import hired from '../../../../Assets/Images/hired_200.png';
import looking_for_job from '../../../../Assets/Images/looking_for_job.png';
import MyStatus from './MyStatus';
import Avatar from './Avatar';



const ProfileJobInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  
  return (

    <div className={data.profileinfo}>
      
      <Avatar photo={props.profile.photos.large} photoSmall={props.profile.photos.small}
              userId={props.profile.userId} userName={props.profile.fullName}
              uploadImage={props.uploadImage} isMe={props.isMe}
              startChatting={props.startChatting} sendMessage={props.sendMessage}
              isAuth={props.isAuth}/>
      


      <div className={data.info_wrapper}>
        <div className={data.info}>
          <div className={data.name}>
            {props.profile.fullName}
          </div>

          { (props.isMe) 
          ? <div className={data.my_status}>

            <MyStatus {...props} />

          </div>
          : <div className={data.user_status}> 
            
            {props.status}
            
            </div>}

        </div>
        <div className={data.about}>
          <div className={data.contacts}>
            <div className={data.contacts_header}>
              Контакты:
            </div>
            <div className={data.contact_item}>
              <div className={data.item}>Facebook:</div>
              <div className={data.item}>Website:</div>
              <div className={data.item}>Vk:</div>
              <div className={data.item}>Twitter:</div>
              <div className={data.item}>Instagram:</div>
              <div className={data.item}>Youtube:</div>
              <div className={data.item}>Github:</div>
              <div className={data.item}>MainLink:</div>

            </div>

            <div className={data.contact_link}>
              <div className={data.item}>{props.profile.contacts.facebook != null ? props.profile.contacts.facebook : "" }</div>
              <div className={data.item}>{props.profile.contacts.website != null ? props.profile.contacts.website : ""}</div>
              <div className={data.item}>{props.profile.contacts.vk != null ? props.profile.contacts.vk : "" }</div>
              <div className={data.item}>{props.profile.contacts.twitter != null ? props.profile.contacts.twitter : "" }</div>
              <div className={data.item}>{props.profile.contacts.instagram != null ? props.profile.contacts.instagram : "" }</div>
              <div className={data.item}>{props.profile.contacts.youtube != null ? props.profile.contacts.youtube : "" }</div>
              <div className={data.item}>{props.profile.contacts.github != null ? props.profile.contacts.github : "" }</div>
              <div className={data.item}>{props.profile.contacts.mainlink != null ? props.profile.contacts.mainlink : "" }</div>
            </div>

          </div>
          <div className={data.job_info}>

            <div className={data.job_header}>

              {(props.profile.lookingForAJob) ? <div>Ищу работу</div> : <div>Работаю</div>}
            </div>
            <div>
              <img src={(props.profile.lookingForAJob) ?
                looking_for_job : hired} />
            </div>
            <div className={data.job_description}>
              {props.profile.lookingForAJobDescription}
            </div>


          </div>

        </div>
      </div>

    </div>
  );
}

export default ProfileJobInfo;
