/**
 * 引入依赖文件
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";

//定义公共组件Header
export default class Header extends Component {
  render() {
    return (
      <header>
        <section className="w-1200">
          <ul className="header-l f-l">
            <li><a>首页</a></li>
            <font>|</font>
            <li><a>微信</a></li>
            <font>|</font>
            <li><a>微博</a></li>
            <li><a>+加关注</a></li>
          </ul>
          <ul className="header-r f-r">
            <li>您好！请</li>
            <li className="login"><Link to={"/login"}>登录</Link></li>
            <li>或</li>
            <li className="register"><Link to={"/register"}>注册</Link></li>
          </ul>
        </section>
      </header>
    )
  }
}
