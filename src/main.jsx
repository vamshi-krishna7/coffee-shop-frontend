import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "../src/containers/index";
import "./index.css";
import { Provider } from "react-redux";
import configureAppStore from "./store/configureStore";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={configureAppStore()}>
      <AppRouter />
    </Provider>
);
