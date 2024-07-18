import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { ProfileContext } from "../context/profile.context";

const PrivateRoute = ({ children, ...routeProps }) => {
  const { profile } = useContext(ProfileContext);

  if (!profile) {
    return <Navigate to="/signIn" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
