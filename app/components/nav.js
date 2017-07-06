import React, { Component } from 'react';
import { Link } from "react-router-dom";

const Navlist = ({nav, name, content}) => (
  <div className="nav-l-b-nav anm a">
    <div>
      <i className={`icon ${name}`}></i>
      <span>{nav}</span>
      <font>></font>
    </div>
    <ul><li><a className="anm">百达翡丽</a></li><li><a className="anm">朗格</a></li><li><a className="anm">宝铂</a></li><li><a className="anm">江诗丹顿</a></li></ul>
    <aside className="pro-list anm">
      {content}
    </aside>
  </div>
)

//banner Nav
export default class Nav extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }
  componentDidMount() {
    //顶部banner
    jQuery(".loop")
      .slide({
        autoPlay: true,
        delayTime: 2000,
        easing: "swing",
        effect: "fold",
        interTime: 5000,
        trigger: "click"
      });
    this.props.location === "/" ? this.refs.nav.className = "anm nav-l-b" : this.refs.nav.className = "anm nav-l-b show ";
  }
  mouseEnter() {
    //console.log(this.refs.nav)
  }
  render() {
    return (
      <section className="w-1200 nav clearfix anm">
        <article className="nav-l f-l anm" onMouseEnter={() => this.mouseEnter()}>
          <div className="nav-l-t">
            <span>乐表腕表库</span><i className="f-r icon icon-nav-jt"></i>
          </div>
          <div ref="nav" className="anm nav-l-b">
              { /* <Style>
                {`
                  .nav-l-b-nav:hover{
                    color:red;
                  }
                `}
              </Style> */ }
              <Navlist name="icon-nav-dj" nav="顶级" content=
      {
      <ul>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                  </ul>
      } />
              <Navlist name="icon-nav-sh" nav="奢华" content=
      {
      <ul>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                  </ul>
      } />
              <Navlist name="icon-nav-hh" nav="豪华" content=
      {
      <ul>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                  </ul>
      } />
              <Navlist name="icon-nav-qm" nav="亲民" content=
      {
      <ul>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                  </ul>
      } />
              <Navlist name="icon-nav-ss" nav="时尚" content=
      {
      <ul>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                    <li><a className="anm">百达翡丽</a></li>
                  </ul>
      } />
          </div>
        </article>
        <article className="nav-r f-r">
          <div className="nav-r-t">
            <ul>
              <li className="anm"><Link to={"/infor"}>咨询</Link></li>
              <li className="anm"><Link to={"/watchLibrary"}>腕表库</Link></li>
              <li className="anm"><Link to={"/brand"}>品牌大全</Link></li>
              <li className="anm"><Link to={"/ranking"}>排行榜</Link></li>
              <li className="anm"><Link to={"/shops"}>商铺</Link></li>
              <li className="anm"><Link to={"/service"}>维修</Link></li>
            </ul>
          </div>
          {this.props.loopState ? <div className="loop">
            <ul className="hd">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="pic-loop-wrap">
              <div className="bd">
                <div className="loop-item">
                  <img src="https://www.omegawatches.com.hk/images/homepage/Carrousel_Home/home_PO_ETNZ_DeepBlack_large.jpg"/>
                </div>
                <div className="loop-item">
                  <img src="https://www.omegawatches.com.hk/images/homepage/Carrousel_Home/home_SpeedmasterFans_large.jpg"/>
                </div>
                <div className="loop-item">
                  <img src="https://www.omegawatches.com.hk/images/homepage/Carrousel_Home/home_SpeedmasterAnniversary_large.jpg"/>
                </div>
                <div className="loop-item">
                  <img src="https://www.omegawatches.com.hk/images/homepage/Carrousel_Home/home_Speedmaster-GC-large.jpg"/>
                </div>
                <div className="loop-item">
                  <img src="http://www.lbiao.com/upload/image/201704/146abad1-e6fb-4830-9046-2d1a3ca0edcf.jpg"/>
                </div>
              </div>
            </div>
          </div> : ""}
        </article>
      </section>
    )
  }
}
