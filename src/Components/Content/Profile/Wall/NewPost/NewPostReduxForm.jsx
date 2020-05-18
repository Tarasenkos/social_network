import React, { useState } from 'react';
import style from './NewPost.module.css';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../../../../Utils/Validators/Validators';
import userPhoto from '../../../../../Assets/Images/user.png';
import { NavLink } from 'react-router-dom';




const NewPost = (props) => {



  let [footer, setFooter] = useState(false)


  return (

    <div className={style.form}>

      <form onSubmit={props.handleSubmit}>
        <div className={style.field_wrap}>
          <div className={style.photo_wrap}>
            <div className={style.photo_wrap_outer}>
              <NavLink to={'/myprofile'}>
                <img src={props.myAvatar || userPhoto} />
              </NavLink>
            </div>
          </div>

          <div className={style.info_wrap}>
            <div className={style.info}>
              <Field onClick={() => setFooter(true)} className={style.textarea} name={"newPostMessage"}
                validate={[required]}
                placeholder="Что у вас нового?" component="textarea" />
            </div>
          </div>
        </div>
        {footer &&
          <div>
            <div onClick={() => setFooter(false)} className={style.modal}></div>
            <div className={style.form_footer}>

              <button className={style.button}>Опубликовать</button>

            </div>
          </div>}


      </form>

    </div>

  )
}


let NewPostReduxForm = reduxForm({ form: 'NewPostRedux' })(NewPost)

export default NewPostReduxForm;
