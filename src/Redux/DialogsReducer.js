import { dialogsAPI, profileAPI } from "../Api/Api";

const GET_DIALOG_LIST = 'GET_DIALOG_LIST';
const GET_MESSAGE_LIST = 'GET_MESSAGE_LIST';
const SET_COMPANION_AVATAR = 'SET_COMPANION_AVATAR';
const SET_COMPANION_ID = 'SET_COMPANION_ID';
const RESET_STATE = 'RESET_STATE';
const SET_IS_DIALOG = 'SET_IS_DIALOG';
const SET_IS_MESSAGE = 'SET_IS_MESSAGE';





let initialState = {

    dialog: null,

    dialogList: [

        {
            "hasNewMessages": null,
            "id": null,
            "lastDialogActivityDate": '',
            "lastUserActivityDate": null,
            "newMessagesCount": null,
            "photos": {
                "small": null,
                "large": null
            },
            "userName": null
        }

    ],

    messageList: [
            {
              "id": null,
              "body": null,
              "translatedBody": null,
              "addedAt": null,
              "senderId": null,
              "senderName": null,
              "recipientId": null,
              "viewed": null,
              
            }
     

    ],

   
    companionAvatar: null,
    companionId: null,
    isDialog: null,
    isMessage: null


}

const DialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_IS_DIALOG:

        return {

            ...state, isDialog: action.isDialog
        }

        case SET_IS_MESSAGE:

        return {

            ...state, isMessage: action.isMessage
        }

        case GET_DIALOG_LIST:

            return {
                ...state, dialogList: action.dialogList
            }

        case GET_MESSAGE_LIST:

            return {
                ...state, messageList: action.messageList
            }

        case SET_COMPANION_AVATAR:

            return {
                ...state, senderAvatar: action.avatarPath
            }

        case SET_COMPANION_ID:
            
            return {
                ...state, companionId: action.userId

            }

        case RESET_STATE:

            return {
                ...state, ...initialState
            }

        

        default:
            return state;
    }
}



export const setDialogList = (dialogList) => ({ type: GET_DIALOG_LIST, dialogList })

export const setMessageList = (messageList) => ({type: GET_MESSAGE_LIST, messageList })

export const setCompanionAvatar = (avatarPath) => ({type: SET_COMPANION_AVATAR, avatarPath})

export const setCompanionId = (userId) => ({type: SET_COMPANION_ID, userId})

export const setIsDialog = (isDialog) => ({type: SET_IS_DIALOG, isDialog })

export const setIsMessage = (isMessage) => ({type: SET_IS_MESSAGE, isMessage })



export const startChatting = (userId) => {

    return async () => {

        await dialogsAPI.startChatting(userId)

    }

}

export const getDialogList = () => {

    return async (dispatch) => {
        
        dispatch(setIsDialog(false))

        let response = await dialogsAPI.getDialogList();

        dispatch(setDialogList(response.data));
        dispatch(setIsDialog(true));
    }
}

export const sendMessage = (userId, message) => {

    return async (dispatch) => {

        let response = await dialogsAPI.sendMessage(userId, message)
        
        if (response.data.resultCode===0) 
            

        dispatch(getMessageList(userId))
    }

}

export const getMessageList = (userId, getProfileInfo=false) => {

    return async (dispatch) => {

        {getProfileInfo && dispatch(setIsMessage(false))}

        let response = await dialogsAPI.getMessageList(userId)

        dispatch(setMessageList(response.data.items))
        
    if (getProfileInfo) {
        await dispatch(setCompanionId(userId))
        await dispatch(getCompanionAvatar(userId))
        dispatch(setIsMessage(true))}
        
    


    }

}

export const getCompanionAvatar = (userId) => {

    return async (dispatch) => {

        let response = await profileAPI.getProfile(userId)

        dispatch(setCompanionAvatar(response.photos.small))
        
    }
}


export default DialogsReducer
