import React, { Component } from 'react';
//搜索模块
export default class SecondTitle extends Component {
  render() {
    return (
      <section className="w-1200 secondT">
          <a href="/">
            <img src="http://img.lbiao.com/upload/image/logo.png"/>
          </a>
          <div className="secendT-r f-r">
            <form>
              <input placeholder="腕表品牌、系统、型号"/>
            </form>
            <span>搜索</span>
          </div>
      </section>
    )
  }
}
