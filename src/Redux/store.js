import myPageReducer from "./MyPageReducer";
import MessagesPageReducer from "./MessagesPageReducer";



let store = {

    _state: {

        MessagesPage: {

            DialogList: [
                { id: 1, name: 'Марина' },
                { id: 2, name: 'Юля' },
                { id: 3, name: 'Слава' },
                { id: 4, name: 'Бабушка Таня' }
            ],

            MessageList: [
                { note: 'Привет, Марина' },
                { note: 'Привет, Юля' },
                { note: 'Привет, Слава' }
            ],

            MessageFieldText: ''
        },

        MyPage: {

            PostList: [
                { post: 'Пост 1' },


            ],

            Friends: [

                { name: 'Марина' },
                { name: 'Юля' },
                { name: 'Слава' },
                { name: 'Таня' },
                { name: 'Женя' },
                { name: 'Нина' },

            ],

            PostFieldText: 'дадада'





        }

    },

    _callSubscriber() {


    },

    getState() {

        return this._state;
    },

    subscribe(observer) {

        this._callSubscriber = observer;
    },

    dispatch(action) {

        
        this._state.MyPage = myPageReducer(this._state.MyPage,action);
        this._state.MessagesPage = MessagesPageReducer(this._state.MessagesPage,action);
        this._callSubscriber(this._state);

    } 

}



export default store;