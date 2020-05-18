import React from 'react';
import data from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {

let friendslist = props.profilePage.Friends.map((F) => <Friend name={F.name} key={F.name} />)

  return (
    
    (!props.isAuth) ||
    (<div className={data.main}>
      <header className={data.header}>
      Друзья - Заглушка
      
      </header>
      <div className={data.list}>
      {friendslist}
      </div>
    </div>)
  );
}

export default Friends;
