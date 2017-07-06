import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./sass/home.scss";
import "./sass/infor.scss";

import Index from "./views/home.js";
import { Provider } from "react-redux";
import Infor from "./views/infor.js";
import WatchLibrary from "./views/watchLibrary.js";
import Brand from "./views/brand.js";
import Rank from "./views/ranking.js";
// const router = () => (
// <Router>
//   <div>
//     <Route exact path="/" component={Index} />
//   </div>
// </Router>
// )

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Index} />
      <Route exact path="/infor" component={Infor} />
      <Route exact path="/WatchLibrary" component={WatchLibrary} />
      <Route exact path="/brand" component={Brand} />
      <Route exact path="/ranking" component={Rank} />
    </div>
  </Router>, document.getElementById("root"));
