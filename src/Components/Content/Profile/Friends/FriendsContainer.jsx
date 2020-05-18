import Friends from './Friends';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    isAuth:state.authData.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
