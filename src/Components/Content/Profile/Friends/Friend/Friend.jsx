import React from 'react';
import data from './Friend.module.css';
import avatar from '../../../../../Assets/Images/user.png';

const Friend = (props) => {

  return (
    <div className={data.cell}>
      <div className={data.main}>
        <img src={avatar} align='left' />
      </div>
      <div className={data.name}>
        {props.name}
      </div>
    </div>


  );
}

export default Friend;
