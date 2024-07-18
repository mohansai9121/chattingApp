import React from "react";
import { Redirect } from "react-router";
import { Route } from "react-router";
import { useProfile } from "../context/profile.context";

const PublicRoute = ({ children, ...routeProps }) => {
  const { profile } = useProfile();

  if (profile) {
    return Redirect("/");
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PublicRoute;
