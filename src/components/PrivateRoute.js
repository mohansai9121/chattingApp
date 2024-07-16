import React from "react";
import { Route } from "react-router";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = true;

  if (!profile) {
    return <Navigate to="/signIn" />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
