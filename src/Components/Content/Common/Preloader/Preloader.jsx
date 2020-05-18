import React from 'react';
import preloader from '../../../../Assets/Images/preloader.svg';
import style from './Preloader.module.css';


const Preloader = () => {

    return (
        
        <div className={style.preloader}>
            <img className={style.preloader_image} src={preloader} />
        </div>
     

    )

}

export default Preloader

