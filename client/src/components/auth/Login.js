import React, { useState, useContext, useEffect } from "react";
import authContext from "../../context/auth/authContext";
import alertContext from "../../context/alert/alertContext";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const AuthContext = useContext(authContext);
  const AlertContext = useContext(alertContext);
  const navigate = useNavigate();
  const { login, error, isAuthenticated, clearErrors } = AuthContext;
  const { setAlert } = AlertContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      //redirect to home page when the user is authorized
      console.log("redirect");
      navigate("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      login({
        email,
        password,
      });
      // setUser(null);
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
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
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
