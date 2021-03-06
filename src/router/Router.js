import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "../component/Login";
import Form from "../component/Form";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/new" component={Form} />
    </Switch>
  </BrowserRouter>
);

export default Router;
