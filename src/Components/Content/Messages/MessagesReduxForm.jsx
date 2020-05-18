import React from 'react';
import s from './Messages.module.css';
import {reduxForm, Field} from 'redux-form';




const MessageForm = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>

        <div>
          <Field name={'newMessage'} placeholder='Напишите сообщение...'
            component={'textarea'}  />
        </div>
        <div>
          <button>
            Опубликовать
          </button>
        </div>
      </form>
    </div>
  );
}


let MessagesReduxForm = reduxForm ({
form: "messageForm"
})(MessageForm)

export default MessagesReduxForm;
