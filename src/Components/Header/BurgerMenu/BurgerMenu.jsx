import React, { useState } from 'react';
import style from './BurgerMenu.module.css';
import { NavLink } from 'react-router-dom';


const BurgerMenu = (props) => {


   let [burgerMenu, setBurgerMenu]=useState(false)

    const toggleMenu=()=> {
        
        burgerMenu=setBurgerMenu(!burgerMenu)

  
      }

    return (
        <div className={style.burger_container}>
            
            <div onClick={()=>toggleMenu()} 
            className={(burgerMenu) 
            ? style.burgerMenu_button_active:style.burgerMenu_button}>
                <span></span>
            </div>
            
            <div className={(burgerMenu) ? style.burgerMenu_active:style.burgerMenu}>
                <ul onClick={()=>toggleMenu()} className={style.burgerMenu_list}>
                    <li>
                        <NavLink to={"/myprofile"} className={style.burgerMenu_link}>
                            <div className={style.item}>Моя страница </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/messages" className={style.burgerMenu_link}>
                            <div className={style.item}>Сообщения</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={style.burgerMenu_link}>
                            <div className={style.item}>Пользователи</div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" className={style.burgerMenu_link}>
                            <div className={style.item}>Настройки</div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )

}
export default BurgerMenu;