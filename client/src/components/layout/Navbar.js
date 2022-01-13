import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import authContext from "../../context/auth/authContext";

export const Navbar = ({ title, icon }) => {
  const AuthContext = useContext(authContext);
  const { isAuthenticated, logout, user } = AuthContext;
  const onLogout = () => {
    logout();
  };
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: "ContactKeeper",
  icon: "fas fa-id-card-alt",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Navbar;
