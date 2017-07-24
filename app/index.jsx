import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store.jsx";
import RouteConfig from "./router/router.jsx";
import "./sass/home.scss";
import "./sass/infor.scss";
import "./sass/inforItem.scss";



ReactDOM.render(
  <Provider store={store}>
    {RouteConfig}
  </Provider>, document.getElementById("root"));
