import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import App from "./App.js";
import localJsonData from "./data/taoyuan.json";

const url =
  "https://data.tycg.gov.tw/api/v1/rest/datastore/a1b4714b-3b75-4ff8-a8f2-cc377e4eaa0f?format=json";
const rootElement = document.getElementById("root");

var proxyUrl = "https://cors-anywhere.herokuapp.com/",
  targetUrl = url;
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    console.table(data);
    let result = { retCode: 1, retVal: {} };
    // console.log(data.success, data.result.records);
    if (data.success === true) {
      for (let i = 0; i < data.result.records.length; i++) {
        result.retVal[i + 200] = data.result.records[i];
      }
    } else {
      console.log("Using fake Data", localJsonData);
      result = localJsonData;
    }

    ReactDOM.render(<App data={result} />, rootElement);
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });

