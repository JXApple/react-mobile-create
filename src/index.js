/*
 * @description  :
 * @Author       : zengrongping
 * @Date         : 2021-03-07 17:43:10
 * @LastEditors  : zengrongping
 * @LastEditTime : 2021-03-08 14:55:36
 * @FilePath     : \react-mobile-create\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "@/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
