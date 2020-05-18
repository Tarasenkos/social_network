import React from 'react';
import { reduxForm, Field } from 'redux-form';
import data from './Login.module.css';
import {required} from '../../../Utils/Validators/Validators';
import {destroy} from 'redux-form';




const contactForm = (props) => {


    let formDestroy=()=>{

        return(dispatch)=>

        dispatch(destroy('loginForm'))
        
    }
    

    return (
        <div>
            <form onChange={formDestroy} onSubmit={props.handleSubmit} className={data.form}>
                <div  >
                    <Field className={data.field_text} name={'email'} 
                    placeholder='email' validate={[required]} component={"input"} />
                </div>
                <div>
                    <Field className={data.field_text} name={'password'} 
                    type={"password"} validate={[required]} 
                    placeholder='Пароль' component={"input"} />
                </div>
                <div className={data.checkbox_area}>
                    <div >
                        <Field name={'rememberMe'} component={"input"} type={"checkbox"} />
                    </div>
                    <div className={data.checkbox_text}>Запомнить меня</div>
                </div>

                <div>
                    <div className={data.button_border}>
                        <button className={data.button}>Войти</button>
                    </div>
                    {(props.error) &&
                    <div className={data.error}>
                        {props.error}
                    </div>}
                </div>




            </form>


        </div>

    )
}


const LoginReduxForm = reduxForm({
    form: 'loginForm'
})(contactForm)

export default LoginReduxForm;