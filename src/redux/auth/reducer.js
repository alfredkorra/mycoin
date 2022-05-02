import {LOGIN, LOGOUT} from "./actionTypes";
import {getToken, setToken, removeToken} from "../../helpers";
import {Route, Redirect} from "react-router-dom";

const initialState = {
    user: null,
    token: getToken(),
    loading: false
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN :
            state = {
                ...state,
                loading: true
            }
            break;
        case LOGIN.concat("_SUCCESS") :
            setToken(action.payload.data);
            state = {
                ...state,
                loading: false,
                token: action.payload.data
                
            }
            break;
        case LOGIN.concat("_FAILURE") :
            state = {
                ...state,
                loading: false,
                token: null
            }
            break;
        case LOGOUT:
            removeToken();
            state = {
                ...state,
                token: null,
                user: null
            }
            window.location.reload();
            break;
        default:
            state = {...state}
    }

    return state;
}


export default auth;