import React from 'react';
import style from './DialogForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { required } from '../../../Utils/Validators/Validators';


const DialogForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div className={style.form}>
                <div className={style.field_wrap}>
                    <Field name="message" component="textarea" autoFocus={true}
                        placeholder="Напишите сообщение..." 
                        validate={[required]} className={style.field} />
                </div>

                <div className={style.controls}>
                    <div className={style.button_wrap}>
                        <button className={style.button}>Отправить</button>
                    </div>
                </div>
            </div>
        </form>


    )
}

const DialogReduxForm = reduxForm({ form: 'dialogForm' })(DialogForm)

export default DialogReduxForm;