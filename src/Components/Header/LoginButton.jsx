import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';



const LoginButton = (props) => {

 
  return (

    <div className={style.header_login_field}>
     
        <button className={style.header_login_button}>
          <NavLink to={"/login"} className={style.navLink}>
            Войти
              </NavLink>
        </button>
     
    </div>

  );
}

export default LoginButton;
