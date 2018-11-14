import React from "react";
import ReactDOM from "react-dom";
import App from "./layout/App";

ReactDOM.hydrate(<App />, document.getElementById("app"));

// 热更新
if (module.hot) {
  module.hot.accept("./layout/App.jsx", () => {
    const NewApp = require("./layout/App").default;
    ReactDOM.hydrate(<NewApp />, document.getElementById("app"));
  });
}
