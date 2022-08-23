import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import axios from "axios";
import store from "./redux/index";
import { Provider } from "react-redux";

axios.defaults.baseURL = "http://localhost:8181";

axios.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
