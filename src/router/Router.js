import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "../component/Login";
import RegisterForm from "../component/RegisterForm";
import Home from "../component/Home";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/new" component={RegisterForm} />
      <Route exact path="/Home" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
