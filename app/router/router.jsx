import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Index from "./../views/home";
import Infor from "./../views/infor";
import WatchLibrary from "./../views/watchLibrary";
import Brand from "./../views/brand";
import Rank from "./../views/ranking";
import InforItem from "./../views/inforItem";


const RouteConfig = (
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
  </Router>
)
export default RouteConfig;
