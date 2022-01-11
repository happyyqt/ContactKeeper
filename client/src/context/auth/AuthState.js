import React, { useReducer, useContext, useEffect } from "react";
import axios from "axios";
import authContext from "./authContext";
import authReducer from "./authReducer";
// import setAuthToken from '../../utils/setAuthToken';
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

const ContactState = (props) => {
  const initialState = {
    //The Storage interface of the Web Storage API provides access to a particular domain's session or local storage.
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = () => {
    console.log("load User");
  };

  // Register User
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login User
  const login = () => {
    console.log("Login User");
  };

  // Logout
  const logout = () => {
    console.log("logout User");
  };

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <authContext.Provider
      value={{
        //everything that other models can use including methods and properties
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default ContactState;
