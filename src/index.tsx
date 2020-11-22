import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";

import "./index.css";

import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <Routes />
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
