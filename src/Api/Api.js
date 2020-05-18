import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "b03ff8ff-3004-4ba7-aa8f-77d976430ef9"
    }

})

export const usersAPI = {

    setUsers(currentPage = 1, pageSize = 10) {
        return (
            instance.get(`users?page=
    ${currentPage}&count=${pageSize}`))
            .then(
                response => response.data)
    },

    unFollow(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => response.data))

    },

    follow(userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => response.data))

    }



}

export const profileAPI = {

    getProfile(userId) {
        return (
            instance.get(`profile/` + userId))
            .then(
                response => response.data

            )
    },

    getStatus(userId) {
        return (
            instance.get(`profile/status/${userId}`)

        )
    },

    updateStatus(status) {
        return (
            instance.put('profile/status', { status })
        )

    },

    updateProfile(profile) {
        return (
            instance.put('profile', profile)
        )

    },

    uploadImage(file) {

        let formData = new FormData();

        formData.append("image", file)

        return (
            instance.put('profile/photo', formData, {

                headers: { 'Content-type': 'multipart/form-data' }

            })


        )
    }



}

export const authAPI = {

    isAuth() {
        return (
            instance.get(`auth/me`)
                .then(response => response.data)
        )

    },

    login(data) {

        return (
            instance.post(`auth/login`, data)
        )


    },

    logout() {

        return (

            instance.delete(`auth/login`)

        )


    },

    getCapcha() {

        return (

            instance.get(`security/get-captcha-url`)

        )


    }


}

export const dialogsAPI = {

    startChatting(userId) {
        return (
            instance.put(`dialogs/${userId}`)
        )
    },

    sendMessage(userId, body) {
        return (

            instance.post(`dialogs/${userId}/messages`, { body })
        )


    },

    getDialogList() {

        return (

            instance.get('dialogs')
        )
    },

    getMessageList(userId) {

        return (

            instance.get(`dialogs/${userId}/messages`)
        )
    }

}



