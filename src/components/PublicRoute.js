import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";

const PublicRoute = ({ children, ...routeProps }) => {
  const profile = true;

  if (profile) {
    return Redirect("/");
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
