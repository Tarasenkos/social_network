export const loadUsers = (state) => {

    return state.usersPage.users
    
}
export const loadCurrentPage = (state) => {

    return state.usersPage.currentPage
    
}
export const loadPageSize = (state) => {

    return state.usersPage.pageSize
    
}

export const loadTotalUsersAmount = (state) => {

    return state.usersPage.totalUsersAmount
    
}
export const loadIsFetching = (state) => {

    return state.usersPage.isFetching
    
}
export const loadFollowedItems = (state) => {

    return state.usersPage.followedItems
    
}

export const loadIsAuth = (state) => {

    return state.authData.isAuth

}






