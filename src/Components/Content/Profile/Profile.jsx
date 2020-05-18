import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import data from './Profile.module.css';
import WallContainer from './Wall/WallContainer';
import FriendsContainer from './Friends/FriendsContainer';

const Profile = (props) => {
  


  return (
    <div className={data.profile}>
      
      <ProfileInfo {...props}/>
      <FriendsContainer/>
      <WallContainer />
                    
      

      
    </div >
  );
}

export default Profile;
