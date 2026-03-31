import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./index.css";
import "./styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/ict2233-ca-02-supunpriyanath333/">
    <App />
  </BrowserRouter>
);
