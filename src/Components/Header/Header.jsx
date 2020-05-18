import React from 'react';
import style from './Header.module.css';
import LoginButton from './LoginButton';
import LoginField from './LoginField';
import logo from '../../Assets/Images/logo.jpg';
import BurgerMenu from './BurgerMenu/BurgerMenu';


const Header = (props) => {
  
 



  return (
     

    <header className={style.header}>
      <div><img src={logo} align='left'/></div>
      <div className={style.burger_button}><BurgerMenu/></div>

      <div>{(props.isAuth) ? <LoginField {...props}/>:<LoginButton />}</div>

    </header >
    
    

  );
}

export default Header;
