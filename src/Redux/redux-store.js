import { createStore, combineReducers, applyMiddleware } from 'redux';
import ProfileReducer from './ProfileReducer';
import DialogsReducer from './DialogsReducer';
import UsersPageReducer from './UsersPageReducer';
import AuthReducer from './AuthReducer';
import AppReducer from './AppReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({

    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage: UsersPageReducer,
    authData: AuthReducer,
    form: formReducer,
    app: AppReducer

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
