import React from 'react';
import data from './User.module.css';
import defaultPhoto from '../../../../Assets/Images/user.jpg';
import { NavLink } from 'react-router-dom';


const User = (props) => {


  return (


    <div className={data.item}>

      <div>
        <NavLink to={'/profile/' + props.id}>
          <img src={props.userPhoto != null ? props.userPhoto : defaultPhoto} />
        </NavLink>
      </div>


      <div>
        <NavLink to={'/profile/' + props.id} className={data.link}>
          <div className={data.name}>
            {props.name}
          </div>
        </NavLink>

        <div className={data.status}>
          {props.status}
        </div>

        <div className={data.place}>
          Россия
        </div>

      </div>


      {(!props.isAuth)  ||  (<div className={data.button}>
        
        {props.followed ?
          
          <button disabled={props.followedItems.some(id=>id===props.id)}

            onClick={() => {
              
              props.unFollow(props.id)

            }}>Вы подписаны</button>

          :

          <button disabled={props.followedItems.some(id=>id===props.id)}

            onClick={() => {

              props.follow(props.id)
              
            }}>Подписаться</button>}

      </div>)}

      
    </div>
  )
}


export default User;
