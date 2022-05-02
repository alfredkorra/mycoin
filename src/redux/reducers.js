import {combineReducers} from "redux";
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth/reducer';



const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['auth'],
};




const rootReducer = combineReducers({
    auth
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default persistedReducer;