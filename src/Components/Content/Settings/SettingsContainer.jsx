import React from 'react';
import { WithAuthRedirect } from '../../../Hoc/WithAuthRedirect';
import style from './Settings.module.css';
import ReduxSettingsForm from './ReduxSettingsForm';
import { connect } from 'react-redux';
import Preloader from '../Common/Preloader/Preloader';
import { updateMyProfile } from '../../../Redux/AuthReducer';







const Settings = (props) => {

    const submitForm = (FormData) => {

        props.updateMyProfile(FormData, props.myProfile.userId)
        

    }


    if (!props.myProfile) {
        return <Preloader />
    }


    return (
        <div className={style.body}>
            <div className={style.header}>Основные</div>
            <div><ReduxSettingsForm onSubmit={submitForm}
                initialValues={props.myProfile} /></div>
        </div>

    )


}


let mapStateToProps = (state) => {

    return {

        myProfile: state.authData.myProfile

    }

}

const SettingsContainer = connect(mapStateToProps, { updateMyProfile })(Settings)

export default WithAuthRedirect(SettingsContainer);