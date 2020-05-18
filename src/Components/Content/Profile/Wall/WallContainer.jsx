import Wall from './Wall';
import { connect } from 'react-redux';
import {addPost} from '../../../../Redux/ProfileReducer';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    isAuth:state.authData.isAuth,
    myAvatar: state.authData.myProfile.photos.small
  }
}

  const mapDispatchToProps = {
    
      addPost
    
  }


  const WallContainer = connect(mapStateToProps, mapDispatchToProps)(Wall);


  export default WallContainer;
