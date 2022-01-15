import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import authContext from "../../context/auth/authContext";
import contactContext from "../../context/contact/contactContext";
const Home = () => {
  const AuthContext = useContext(authContext);
  const ContactContext = useContext(contactContext);

  useEffect(() => {
    AuthContext.loadUser();
    ContactContext.getContacts();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
