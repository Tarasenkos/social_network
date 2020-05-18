import React from 'react';
import ProfileContainer_URL from './ProfileContainer'; 
import { WithAuthRedirect } from '../../../Hoc/WithAuthRedirect';



const MyProfile = (props) => {
  

  return <ProfileContainer_URL isMe={true}/>

    
  
}


export default WithAuthRedirect(MyProfile);
