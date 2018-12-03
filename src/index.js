import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App.js";
import data from "./data/taoyuan.json";

// https://data.tycg.gov.tw/api/v1/rest/datastore/a1b4714b-3b75-4ff8-a8f2-cc377e4eaa0f?format=json
const rootElement = document.getElementById("root");

ReactDOM.render(<App data={data} />, rootElement);
