import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      // set the token value
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        //token:
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        //token:
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    //share the same return
    case AUTH_ERROR:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      //remove the token
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case USER_LOADED:
      //why no localstoage token here?
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    default:
      return state;
  }
};
