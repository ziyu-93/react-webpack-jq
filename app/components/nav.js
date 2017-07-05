import React, { Component } from 'react';

const Navlist = ({nav, name, content}) => (
  <li className="nav-l-b-nav anm a">
    <div>
      <i className={`icon ${name}`}></i>
      <span>{nav}</span>
      <font>></font>
    </div>
    <ul><li><a className="anm">百达翡丽</a></li><li><a className="anm">朗格</a></li><li><a className="anm">宝铂</a></li><li><a className="anm">江诗丹顿</a></li></ul>
    <aside className="pro-list anm">
      {content}
    </aside>
  </li>
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
    this.props.location !== "" ? this.refs.nav.className = "nav-l-b anm show" : this.refs.nav.className = "nav-l-b anm"
  }
  render() {
    return (
      <section className="w-1200 nav clearfix">
        <article className="nav-l f-l">
          <div className="nav-l-t">
            <span>乐表腕表库</span><i className="f-r icon icon-nav-jt"></i>
          </div>
          <div ref="nav" className="nav-l-b anm">
            <ul>
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
            </ul>
          </div>
        </article>
        <article className="nav-r f-r">
          <div className="nav-r-t">
            <ul>
              <li className="anm">咨询</li>
              <li className="anm">腕表库</li>
              <li className="anm">品牌大全</li>
              <li className="anm">排行榜</li>
              <li className="anm">商铺</li>
              <li className="anm">维修</li>
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
