import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setUserAuthData, logout } from '../../Redux/AuthReducer';
import { getProfile, getStatus } from '../../Redux/ProfileReducer';


class HeaderContainer extends React.Component {

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    login: state.authData.login,
    isAuth: state.authData.isAuth,
    id: state.authData.id,
    avatar: state.authData.myProfile.photos.small
    
  }
}

export default connect(mapStateToProps,
  { setUserAuthData, logout, getProfile, getStatus })(HeaderContainer);
