import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfile, getStatus } from '../../../Redux/ProfileReducer';
import { statusUpdate, uploadImage } from '../../../Redux/AuthReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { startChatting, sendMessage} from '../../../Redux/DialogsReducer';





class ProfileContainer extends React.Component {

  componentWillMount() {

    let userId = this.props.match.params.userId
    return (
      (this.props.isMe) || (this.props.myId == this.props.match.params.userId) ||
      (this.props.getProfile(userId), this.props.getStatus(userId))

    )

  }




  render() {

    let userProfile = (this.props.isMe || this.props.myId == this.props.match.params.userId)
      ? (this.props.myProfile) : (this.props.profile)

    let userStatus = (this.props.isMe || this.props.myId == this.props.match.params.userId)
      ? (this.props.myStatus) : (this.props.status)

    let myProfile = (this.props.isMe || this.props.myId == this.props.match.params.userId)
      ? true : false



    return (
      <div>

        <Profile profile={userProfile} status={userStatus} isMe={myProfile} 
          startChatting={this.props.startChatting} uploadImage={this.props.uploadImage} 
          statusUpdate={this.props.statusUpdate} sendMessage={this.props.sendMessage}
          isAuth={this.props.isAuth}/>
      </div >
    );

  }
}

let mapStateToProps = (state) => {

  return {

    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myProfile: state.authData.myProfile,
    myStatus: state.authData.myStatus,
    myId: state.authData.id,
    isAuth:state.authData.isAuth

  }

}

let mapDispatchToProps = {

  getProfile, getStatus, statusUpdate, uploadImage, startChatting, sendMessage

}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter)(ProfileContainer);
