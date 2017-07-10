import React, { Component } from "react";
import ContentTitle from "./../components/title.js";
//热点资讯
const HotInfo = ({text}) => (
  <div className="item-info">
    <div className="anm pay">
        <font>(付费:￥2)</font>
        <img className="pay-icon" src="http://img.lbiao.com/resources/shop/2017/images/pay.jpg"/>
    </div>
    <span className="text">{text}</span>
  </div>
)
export default class HotMessage extends Component {
  render() {
    return (
      <section className="w-300 f-r hotInfor">
        <ContentTitle english="Hot" text="热点资讯"/>
        <aside className="info-list">
          <HotInfo text="鉴赏 | 律动之美 腕表极度简约的线条"/>
          <HotInfo text="清纯白色不难驾驭 多款白色腕表让你"/>
          <HotInfo text="ZENITH真力时携手路虎入驻上海车展 "/>
          <HotInfo text="高科技G-SHOCK震撼巴塞尔钟表展"/>
          <HotInfo text="G-SHOCK腕表GA系列掀盛夏撞色狂潮"/>
          <HotInfo text="如感速度与激情 高速摩托车世界帝舵F"/>
          <HotInfo text="朗格 时代的面孔"/>
          <HotInfo text="贝伦赛丽品阅世界时间 24个时区腕表"/>
          <HotInfo text="可信赖的战友 美度舵手系列腕表"/>
          <HotInfo text="柏莱士BR01 Black Ceramic黑陶瓷腕表"/>
        </aside>
      </section>
    )
  }
}
