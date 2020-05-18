import React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';


let AuthMapStateToProps=(state)=>{
return {
isAuth: state.authData.isAuth,
myId: state.authData.id
}
}


export const WithAuthRedirect = (Component)=>{


    let wrappedComponent = (props)=> {

        if(!props.isAuth) return <Redirect to={'/login'}/>

        return <Component {...props}/>

    }

    let WithRedirectComponent = connect(AuthMapStateToProps)(wrappedComponent)

    return WithRedirectComponent


};








 
