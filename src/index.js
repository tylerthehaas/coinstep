/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import Routes from "./routes";
import registerServiceWorker from "./registerServiceWorker";

const root = document.getElementById("root") || null;

if (root) {
  ReactDOM.render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>,
    root,
  );
  registerServiceWorker();
}
