import { Route, Switch } from "react-router-dom";

import Home from "./home/home";
import LoginContainer from "./session/login_container";
import React from "react";
import SignupContainer from "./session/signup_container";
import PatientList from "./patient/PatientList";

export default () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/admin" component={PatientList} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
