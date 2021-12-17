import React, { useReducer } from "react";
import uuid from "uuid";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johoson",
        email: "jill@gmail.com",
        phone: "111-1111-111",
        type: "personal",
      },
      {
        id: 2,
        name: "Sara Watson",
        email: "sara@gmail.com",
        phone: "222-2222-222",
        type: "personal",
      },

      {
        id: 3,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-3333-333",
        type: "professional",
      },
    ],
  };

  //Add contact

  //Delete Contact

  //Set Current Contact

  //Clear current contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <contactContext.Provider
      value={{
        //everything that other models can use including methods and properties
        contacts: state.contacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
