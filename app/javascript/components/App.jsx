import { Route, Switch } from "react-router-dom";

import Home from "./home/home";
import LoginContainer from "./session/login_container";
import React from "react";
import Signup from "./session/signup";
import PatientList from "./patient/PatientList";

export default () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/admin" component={PatientList} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
