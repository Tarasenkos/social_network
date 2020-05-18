import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {

        // <NavLink to={"/profile/" + props.myId} className={s.link}>
        //   <div className={s.item}>Моя страница</div>
        // </NavLink>

  return (
    <div className={s.wrap}>
        <NavLink to={"/myprofile"} className={s.link}>
          <div className={s.item}>Моя страница</div>
        </NavLink>
      
        <NavLink to="/messages" className={s.link}>
          <div className={s.item}>Сообщения</div>
        </NavLink>

        <NavLink to="/users" className={s.link}>
          <div className={s.item}>Пользователи</div>
        </NavLink>

        <NavLink to="/settings" className={s.link}>
          <div className={s.item}>Настройки</div>
        </NavLink>
        


      
    </div>
  );
}

export default Navbar;
