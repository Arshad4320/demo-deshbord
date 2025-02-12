import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthProvider);
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
