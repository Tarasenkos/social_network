import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const HeaderMenu = (props) => {

   
    return (

        <div className={style.headermenu}>
            <div >
                <NavLink to={"/myprofile"} className={style.navLink}>
                    <div className={style.menu_item}>Моя страница</div>
                </NavLink>

            </div>
            <div>
                <NavLink to={"/settings"} className={style.navLink}>
                    <div className={style.menu_item}>Настройки</div>
                </NavLink>
            </div>

            <div className={style.menu_item} onClick={props.logout}>Выход</div>
        </div>

    )

}
export default HeaderMenu;