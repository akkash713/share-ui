import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./public-pages/login";
import ForgotPasswordForm from "./public-pages/forgot-password";
import Register from "./public-pages/register";
import Workspaces from "./workspaces";
import CreateForm from "./create-form";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/forgot-password" component={ForgotPasswordForm} />
        <Route path="/register" component={Register} />
        <Route path="/workspaces" component={Workspaces} />
        <Route path="/create-form" component={CreateForm} />
        <Route component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
