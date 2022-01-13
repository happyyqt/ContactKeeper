import React, { useReducer } from "react";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { v4 as uuidv4 } from "uuid";
// import setAuthToken from '../../utils/setAuthToken';
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //SET_ALERT
  const setAlert = (msg, type, timeout = 5000) => {
    const id = uuidv4();
    // type: alert type including primary, secondary, light, dark etc. which shows different colours
    dispatch({ type: SET_ALERT, payload: { msg, type, id } });
    // 5000 is timeout
    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };

  return (
    <alertContext.Provider
      value={{
        //everything that other models can use including methods and properties
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
