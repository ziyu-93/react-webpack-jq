import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./sass/home.scss";
import "./sass/infor.scss";
import "./sass/inforItem.scss";
import Index from "./views/home";
import { Provider } from "react-redux";
import Infor from "./views/infor";
import WatchLibrary from "./views/watchLibrary";
import Brand from "./views/brand";
import Rank from "./views/ranking";
import InforItem from "./views/inforItem";
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
      <Switch>
        <Route exact path="/infor" component={Infor} />
        <Route exact path="/infor/:id" component={InforItem} />
      </Switch>
      <Route exact path="/WatchLibrary" component={WatchLibrary} />
      <Route exact path="/brand" component={Brand} />
      <Route exact path="/ranking" component={Rank} />
    </div>
  </Router>, document.getElementById("root"));
