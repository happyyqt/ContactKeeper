import { STATES } from "mongoose";
import React, { useState, useContext, useEffect } from "react";
import authContext from "../../context/auth/authContext";
import alertContext from "../../context/alert/alertContext";

const Register = () => {
  const AlertContext = useContext(alertContext);
  const AuthContext = useContext(authContext);
  const { setAlert } = AlertContext;
  const { error, register, clearErrors } = AuthContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
  }, [error]);
  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password2 === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Please set the same password", "primary");
    } else {
      console.log("Register submit");
      register({
        name,
        email,
        password,
      });
      // setUser(null);
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          {/* instead of using for, here we should use htmlFor in JSX */}
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          {/* instead of using for, here we should use htmlFor in JSX */}
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          {/* instead of using for, here we should use htmlFor in JSX */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>

        <div className="form-group">
          {/* instead of using for, here we should use htmlFor in JSX */}
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
