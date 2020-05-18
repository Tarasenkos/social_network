import { authAPI, profileAPI } from '../Api/Api';
import { stopSubmit } from 'redux-form';



const SET_USERAUTH_DATA = 'SET_USERAUTH_DATA'
const SET_MY_PROFILE = 'SET_MY_PROFILE';
const SET_MY_STATUS = 'SET_MY_STATUS';
const UPDATE_MY_AVATAR = 'UPDATE_MY_AVATAR';
const RESET_STATE = 'RESET_STATE';


let initialState = {

    id: null,
    login: null,
    email: null,
    isAuth: false,
    myProfile: {
        "aboutMe": null,
        "contacts": {
          "facebook": null,
          "website": null,
          "vk": null,
          "twitter": null,
          "instagram": null,
          "youtube": null,
          "github": null,
          "mainLink": null
        },
        "lookingForAJob": null,
        "lookingForAJobDescription": null,
        "fullName": null,
        "userId": null,
        "photos": {
          "small": "",
          "large": ""
        }
      },
    myStatus: ''




}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERAUTH_DATA: {

            return {
                ...state, ...action.UserData

            }
        }

        case RESET_STATE:{

            return {

                ...state, ...initialState
                
            }
        }

        case SET_MY_PROFILE: {

            return {

                ...state, myProfile: action.myProfile

            }
        }

        case SET_MY_STATUS: {

            return {

                ...state, myStatus: action.myStatus

            }
        }

        case UPDATE_MY_AVATAR: {

            return {

                ...state, myProfile: { ...state.myProfile, photos: action.path }

            }

        }

        default:
            return state;
    }

}


export const setMyProfile = (myProfile) => ({ type: SET_MY_PROFILE, myProfile })

export const setMyStatus = (myStatus) => ({ type: SET_MY_STATUS, myStatus })

export const updateMyAvatar = (path) => ({ type: UPDATE_MY_AVATAR, path })

export const getMyProfile = (myId) => {

    return async (dispatch) => {


        let myProfile = await profileAPI.getProfile(myId)

        dispatch(setMyProfile(myProfile));

    }
}

export const getMyStatus = (myId) => {

    return async (dispatch) => {


        let response = await profileAPI.getStatus(myId)


        dispatch(setMyStatus(response.data))


    }

}

export const statusUpdate = (status) => {

    return async (dispatch) => {

        let response = await profileAPI.updateStatus(status)

        if (response.data.resultCode == 0) (
            dispatch(setMyStatus(status)))

    }
}

export const updateMyProfile = (profile, id) => {

    return async (dispatch) => {

        let response = await profileAPI.updateProfile(profile);

        if (response.data.resultCode == 0)

            dispatch(getMyProfile(id))
            alert('Изменения сохранены - Временное окно');



    }

}

export const uploadImage = (file) => {

    return async (dispatch) => {

        let response = await profileAPI.uploadImage(file);

        if (response.data.resultCode == 0)

            dispatch(updateMyAvatar(response.data.data.photos))

    }
}



export const resetState =() => ({ type: RESET_STATE})

export const setUserAuthData = (id, login, email, isAuth) => ({ type: SET_USERAUTH_DATA, UserData: { id, login, email, isAuth } })

export const isMeAuth = () => {

    return async (dispatch) => {

        let data = await authAPI.isAuth() 
        
    if (data.resultCode === 0) {

            let { id, login, email } = data.data;
            dispatch(setUserAuthData(id, login, email, true));
            await dispatch(getMyProfile(id));
            await dispatch(getMyStatus(id));

            
        }
    }
}

export const login = (formData) => {

    return async (dispatch) => {
        
        let response = await authAPI.login(formData)
        if (response.data.resultCode == 0) {
            //let userId = response.data.data.userId;
            let promise = dispatch(isMeAuth()) 
            promise.then (document.location.href = '/myprofile');
            
            //(<Redirect to={'/myprofile'}/>)
            //history.pushState(null, null, '/anypath');
            //(document.location.href = '/myprofile');
            

        } else if (response.data.resultCode == 1) {

            dispatch(stopSubmit("loginForm",
                { _error: "Неверный email или пароль!" }));
        }
    }
}

export const logout = () => {

    return async (dispatch) => {

        let response = await authAPI.logout()
        if (response.data.resultCode == 0) {
            //dispatch(setUserAuthData(null, null, null, null))
            dispatch(resetState())
        }
    }
}

export default AuthReducer;