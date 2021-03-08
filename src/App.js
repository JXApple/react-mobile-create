/*
 * @description  :
 * @Author       : zengrongping
 * @Date         : 2021-03-07 17:43:10
 * @LastEditors  : zengrongping
 * @LastEditTime : 2021-03-08 13:40:31
 * @FilePath     : \react-mobile-create\src\App.js
 */
import React from "react";
import { Button } from "antd-mobile";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">按钮</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
