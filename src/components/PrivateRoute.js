import React from "react";
import { Route } from "react-router";
import { Redirect } from "react-router";

const PrivateRoute = ({ children, ...routeProps }) => {
  const profile = true;

  if (!profile) {
    return Redirect("/signIn");
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;
