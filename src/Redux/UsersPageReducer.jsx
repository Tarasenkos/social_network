import { usersAPI } from '../Api/Api';


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS_LIST = 'SET-USERS_LIST';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_AMOUNT = 'SET_TOTAL_USERS_AMOUNT';
const SET_ISFETCHING = 'SET_ISFETCHING';
const FOLLOWED_ITEMS = 'FOLLOWED_ITEMS';


let initialState = {

    users: [
    ],
    currentPage: 1,
    pageSize: 100,
    totalUsersAmount: 0,
    isFetching: null,
    followedItems: []


}

const following = (state, userId, following_status) => {

    return {
        ...state,
        users: state.users.map(U => {
            if (U.id === userId) {
                return { ...U, followed: following_status }
            }
            return U;
        })

    }
}

const UsersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return following(state, action.userId, true);

        case UNFOLLOW:
            return following(state, action.userId, false);

        case SET_USERS_LIST:
            return { ...state, users: [...action.users] }


        case SET_CURRENT_PAGE: {

            return { ...state, currentPage: action.currentPage }

        }
        case SET_TOTAL_USERS_AMOUNT: {

            return { ...state, totalUsersAmount: action.totalAmount }
        }

        case SET_ISFETCHING: {

            return { ...state, isFetching: action.isFetching }
        }

        case FOLLOWED_ITEMS: {

            return {
                ...state,
                followedItems: action.isFetching
                    ? [...state.followedItems, action.userId]
                    : state.followedItems.filter(id => id != action.userId)
            }
        }

        

        default:
            return state;
    }

}


const followUnfollowAction = (userId, action) => {


    let APImethod = (action) ? usersAPI.follow : usersAPI.unFollow;
    let confirmation = (action) ? followConfirmed : unFollowConfirmed;

    return async (dispatch) => {

        dispatch(setFollowedItems(true, userId))

        let data = await APImethod(userId)

        if (data.resultCode == 0) (dispatch(confirmation(userId)))
        dispatch(setFollowedItems(false, userId))

    }
}


export const followConfirmed = (userId) => ({ type: FOLLOW, userId })

export const unFollowConfirmed = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersList = (users) => ({ type: SET_USERS_LIST, users })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export const setTotalUsersAmount = (totalAmount) => ({ type: SET_TOTAL_USERS_AMOUNT, totalAmount })

export const setIsFetching = (isFetching) => ({ type: SET_ISFETCHING, isFetching })

export const setFollowedItems = (isFetching, userId) => ({ type: FOLLOWED_ITEMS, isFetching, userId })

//export const resetState =() => ({type: RESET_STATE})

export const getUsers = (currentPage, pageSize) => {

    return async (dispatch) => {

        dispatch(setIsFetching(true));

        let data = await usersAPI.setUsers(currentPage, pageSize)

        dispatch(setIsFetching(false));
        dispatch(setUsersList(data.items));
        dispatch(setTotalUsersAmount(data.totalCount));
    }

}

export const unFollow = (userId) => {

    return followUnfollowAction(userId, false)

}

export const follow = (userId) => {

    return followUnfollowAction(userId, true)

}

export default UsersPageReducer;