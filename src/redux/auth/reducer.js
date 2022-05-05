import { LOGIN, LOGOUT, GET_CURRENT_USER } from "./actionTypes";
import { getToken, setToken, removeToken } from "../../helpers";

const initialState = {
  user: null,
  token: getToken(),
  loading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      state = {
        ...state,
        loading: true,
      };
      break;
    case LOGIN.concat("_SUCCESS"):
      setToken(action.payload.data);
      state = {
        ...state,
        loading: false,
        token: action.payload.data,
      };
      break;
    case LOGIN.concat("_FAILURE"):
      state = {
        ...state,
        loading: false,
        token: null,
      };
      break;
    case GET_CURRENT_USER.concat("_SUCCESS"):
      console.log("check payload", action.payload);
      state = {
        ...state,
      };

      break;
    case LOGOUT:
      removeToken();
      state = {
        ...state,
        token: null,
        user: null,
      };
      window.location.reload();
      break;
    default:
      state = { ...state };
  }

  return state;
};

export default auth;
