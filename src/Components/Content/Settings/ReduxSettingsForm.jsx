import React, {useState} from 'react';
import style from './Settings.module.css';
import { reduxForm, Field } from 'redux-form';



const SettingsForm = (props) => {

let [lookingForJob, setLookingForJob] = useState(props.initialValues.lookingForAJob);
 

let jobSwitch=()=>{

    (lookingForJob) ? (setLookingForJob(false)):(setLookingForJob(true))
    
}





    return (
        < div>
            <form onSubmit={props.handleSubmit} className={style.form} initialValues={props.initialValues}>
                <div className={style.row}>
                    <div className={style.name}>Имя: </div>
                    <div>
                        <Field placeholder="Укажите Ваше имя" name="fullName" component="input" className={style.input} />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.name}>Обо мне: </div>
                    <div>
                        <Field placeholder="Расскажите о себе" name="aboutMe" component="textarea" className={style.textarea} />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.name}>Ищу работу: </div>
                    <div>
                        <Field id="checkbox" onInput={()=>jobSwitch()} name="lookingForAJob" component="input" type="checkbox" />
                    </div>
                </div>
               
               { (lookingForJob) ?
                <div className={style.row}>
                    <div className={style.name}>Должность: </div>
                    <div>
                        <Field placeholder="Укажите должность" name="lookingForAJobDescription"
                            component="input" className={style.input} />
                    </div>
                </div>
                :''}
                <div className={style.inner_header}>
                    Контакты
                </div>
                <div className={style.row}>
                    <div className={style.name}>Facebook: </div>
                    <div>
                        <Field placeholder="https://facebook.com" name="contacts.facebook" 
                        component="input" className={style.input} />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.name}>Сайт: </div>
                    <div>
                        <Field placeholder="https://yoursite.com" value="-" name="contacts.website" 
                        component="input" className={style.input} />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.name}>ВКонтакте: </div>
                    <div>
                        <Field placeholder="https://vk.com" name="contacts.vk" 
                        component="input" className={style.input} />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.name}>Твиттер: </div>
                    <div>
                        <Field placeholder="https://twitter.com" name="contacts.twitter" 
                        component="input" className={style.input} />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.name}>Инстаграм: </div>
                    <div>
                        <Field  placeholder="https://instagram.com" name="contacts.instagram" 
                        component="input" className={style.input} />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.name}>YouTube: </div>
                    <div>
                        <Field  placeholder="https://youtube.com" value="-" name="contacts.youtube" 
                        component="input" className={style.input} />
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.name}>GitHub: </div>
                    <div>
                        <Field  placeholder="https://github.com" name="contacts.github" 
                        component="input" className={style.input} />
                    </div>
                </div>
                <div className={style.separator}></div>

                <div className={style.controls}>
                    <div className={style.button_wrap}>
                    <button className={style.button}>Сохранить</button>
                    </div>
                </div>


            </form>

        </div>

    )

}


const ReduxSettingsForm = reduxForm({ form: "settingsForm" })(SettingsForm)

export default ReduxSettingsForm;