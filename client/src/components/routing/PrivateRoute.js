import React, { useContext } from "react";
import authContext from "../../context/auth/authContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const AuthContext = useContext(authContext);
  const { isAuthenticated, loading } = AuthContext;
  return !isAuthenticated && !loading ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
