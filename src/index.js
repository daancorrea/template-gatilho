import React from "react";
import ReactDOM from "react-dom";

import Routes from "./routes"
import Home from "./Container/Home";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Routes />
  </>,
  document.getElementById("root")
);
