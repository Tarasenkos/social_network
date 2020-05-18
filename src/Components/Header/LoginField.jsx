import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import user from '../../Assets/Images/user.jpg';
import HeaderMenu from './HeaderMenu';



const LoginField = (props) => {

  let [menu, setMenu] = useState(false);


  return (

    <div className={style.header_login_field}>

      <div onClick={() => { setMenu(true) }} className={style.header_login_field_link} >

        <div>
          <img src={props.avatar || user} />
        </div>
        <div className={style.header_login_name}>
          {props.login}
        </div>


      </div>

      {(menu) ?

        <div>

          {/* modal transparent window to catch mouse click */}
          <div className={style.header_modal}
            onClick={() => { setMenu(false) }} />


          <div onClick={() => { setMenu(false) }}>
            <HeaderMenu logout={props.logout} /></div></div> : ''}

    </div>


  );
}

export default LoginField;
