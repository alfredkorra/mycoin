import {LOGIN, LOGOUT} from "./actionTypes";
import {getToken, setToken} from "../../helpers";

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
            setToken(action.payload.token);
            state = {
                ...state,
                loading: false,
                token: action.payload.token
            }
            break;
        case LOGIN.concat("_FAILURE") :
            state = {
                ...state,
                loading: false,
                token: null
            }
            break;

        default:
            state = {...state}
    }

    return state;
}


export default auth;