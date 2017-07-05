import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./sass/home.scss";
import Index from "./views/home.js";
import { Provider } from "react-redux";
import NewWatch from "./views/nWatch.js";
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
      <Route exact path="/nWatch/:newWatchId" component={NewWatch} />
    </div>
  </Router>, document.getElementById("root"));
