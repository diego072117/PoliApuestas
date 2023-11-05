import React from "react";
import ReactDOM from "react-dom/client";
import { PoliApp } from "./PoliApp.jsx";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PoliApp />
  </Provider>
);
