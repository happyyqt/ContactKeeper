import { SET_ALERT, REMOVE_ALERT } from "../types";

const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      // include other alerts as well
      return [...state, action.payload];
    case REMOVE_ALERT:
      // filter the alert with only id !== payload left.
      return state.filter((alert) => alert.id !== action.payload);
    default:
      return state;
  }
};

export default alertReducer;
