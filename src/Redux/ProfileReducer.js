import { setIsFetching } from '../Redux/UsersPageReducer';
import { profileAPI } from '../Api/Api';


const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {

    PostList: [
        { post: 'Добавлен функционал сообщений' },


    ],

    Friends: [

        { name: 'Марина' },
        { name: 'Юля' },
        { name: 'Слава' },
        { name: 'Таня' },
        { name: 'Женя' },
        { name: 'Нина' },

    ],

    profile: null,
    status: ''
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, PostList: [...state.PostList,
                { post: action.newPostMessage }]
            }

        case SET_PROFILE:
            return { ...state, profile: action.profile }

        case SET_STATUS:
            return { ...state, status: action.status }


        default: return state;
    }

}

export const addPost = (newPostMessage) => ({ type: ADD_POST, newPostMessage })

export const setProfile = (profile) => ({ type: SET_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })


export const getProfile = (userId) => {

    return async (dispatch) => {

        dispatch(setIsFetching(true));

        let data = await profileAPI.getProfile(userId)

        dispatch(setProfile(data));
        dispatch(setIsFetching(false));

    }
}

export const getStatus = (userId) => {

    return (dispatch) => {


        profileAPI.getStatus(userId)
            .then(response => {

                dispatch(setStatus(response.data))
            })

    }

}


export default ProfileReducer;