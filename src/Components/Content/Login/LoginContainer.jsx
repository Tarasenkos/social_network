import React from 'react';
import s from './Login.module.css';
import LoginReduxForm from './LoginReduxForm';
import { connect } from 'react-redux';
import { login } from '../../../Redux/AuthReducer';
import { Redirect } from 'react-router-dom';



const Login = (props) => {

  let onSubmit = (formData) => {

    props.login(formData)
  }


  if (props.isAuth) return <Redirect to={'/myprofile'}/>

  
  

  return (

      
    <div className={s.body}>
      <h2>Добро пожаловать!</h2>
      <div>

        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
    
  );
}

let mapStateToProps=(state)=> {

  return {
    id: state.authData.id,
    isAuth: state.authData.isAuth

  } 
}


let mapDispatchToProps = {

  login
}




let LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer;
