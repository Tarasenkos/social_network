import { isMeAuth } from './AuthReducer';

const INICIALIZED_SUCCESS = 'INICIALIZED_SUCCESS'



let initialState = {

    inicialized: false

}


const AppReducer = (state = initialState, action) => {

    switch (action.type) {

        case INICIALIZED_SUCCESS: {

            return {
                ...state, inicialized: true

            }

        }

        default:
            return state;
    }

}


export const inicializedSuccess = () => ({ type: INICIALIZED_SUCCESS })

export const inicializeApp = () => {

    return (dispatch) => {


        let promise = dispatch(isMeAuth())

        Promise.all([promise])
            .then(() => {dispatch(inicializedSuccess()) })
            




    }
}

export default AppReducer;