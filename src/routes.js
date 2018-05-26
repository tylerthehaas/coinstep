/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Switch, Route } from "react-router-dom";

import Loadable from "./components/shared/Loadable";

const Home = Loadable("container/App");

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);
