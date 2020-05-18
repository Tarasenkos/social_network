import React from 'react';
import s from './Content.module.css';
import ProfileContainer_URL from './Profile/ProfileContainer';
import MessagesContainer from './Messages/MessagesContainer';
import UsersContainer from './Users/UsersContainer';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from './Login/LoginContainer'; 
import {withRouter} from 'react-router-dom';
import SettingsContainer from './Settings/SettingsContainer';
import MyProfile from './Profile/MyProfile';




const Content = (props) => {
  
  return (
  
    <div className={s.body}>
      <Switch>
      <Route path={`/myprofile`} render={() =>  <MyProfile/>} />
      <Route path={`/profile/:userId`} render={() =>  <ProfileContainer_URL />} />
      <Route path={`/messages`} render={() => <MessagesContainer />} />
      <Route path={`/dialog/:userId?`} render={() => <MessagesContainer />} />
      <Route exact path="/users" render={() => <UsersContainer />} />
      <Route path="/login" render={() => <LoginContainer />} />
      <Route path="/settings" render={() => <SettingsContainer  />} />
      <Route path="*" render={() => <MyProfile/>} />
      </Switch>
    </div>
   
  );
}

export default withRouter(Content);
