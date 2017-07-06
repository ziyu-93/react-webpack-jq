import React, { Component } from "react";
import { Footer } from "./../components/footer.js";
import Header from "./../components/header.js";
import SecondTitle from "./../components/search.js";
import Nav from "./../components/nav.js";
import ContentTitle from "./../components/title.js";
import { Link } from "react-router-dom";
import httpRequest from "./../tool/tools.js";
export default class Infor extends Component {
  componentWillMount() {
    //console.log(this.props.location.pathname);
  }
  render() {
    return (
      <section>
        <Header/>
        <SecondTitle/>
        <Nav loopState={false} location={this.props.location.pathname}/>
        <InforContent/>
        <Footer/>
      </section>
    )
  }
}
//资讯List
const ListInfor = ({src, title, time, from, auther, context, id}) => (
  <aside className="infor-item anm">
    <div className="f-l item-l">
      <Link to={`/infor/${id}`}><img className="anm anm-scale" src={src}/></Link>
    </div>
    <div className="f-r item-r">
      <p className="infor-title"><Link className="changeCol" to={`/infor/${id}`}>{title}</Link></p>
      <div className="infor-message-wrap"><span className="infor-time f-l">{time}</span><div className="infor-message f-r"><span className="infor-from">消息来源：{from}</span><span className="infor-auther">作者：{auther}</span></div></div>
      <p className="infor-text"><Link className="changeCol" to={`/infor/${id}`}>{context}</Link></p>
    </div>
  </aside>
)
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
import func from "./../tool/converter.js";
//资讯
class InforContent extends Component {
  constructor(props) {
    super(props)
    // 设置当前页码，默认为第一页
    this.state = {
      pageCurr: 1,
      createNum: 1,
      data: []
    }
  }
  //为什么会无数次的请求 update 一直加载 json 数据
  // shouldComponentUpdate() {
  //   httpRequest.fetchGet("./data/data" + `${this.state.pageCurr}` + ".json", "", (data) => {
  //     this.setState({
  //       data: data.infor
  //     })
  //   })
  // }
  handValue(val) {
    this.setState({
      data: val
    })
  }
  render() {
    const {data} = this.state;
    return (
      <section className="w-1200 clearfix infor">
        <article className="w-875 f-l">
          <ContentTitle english="Article" text="资讯"/>
          <article className="infor-wrap clearfix">
            {
      data.length !== 0 ? data.map((e, i) => {
        return <ListInfor key={i} src={e.img} title={e.title} time={e.time} from={e.from} auther={e.author} context={e.context}/>
      }) : <li>没有数据了</li>
      }
          </article>
          <Pagination config={{
        totalPage: 16
      }} hand={this.handValue.bind(this)}/>
          { /* this.handValue.bind(this) 可以传值，默认传递的是 子组件hand方法里的值  */ }
        </article>
        <article className="w-300 f-r hotInfor">
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
        </article>
      </section>
    )
  }
}
// defaultProps
InforContent.defaultProps = {
  config: {
    totalPage: 16
  }
}
//分页
class Pagination extends Component {
  constructor(props) {
    super(props)
    // 设置当前页码，默认为第一页
    this.state = {
      pageCurr: 1,
      createNum: 1,
      data: []
    }
  }
  componentWillMount() {
    httpRequest.fetchGet("./data/data" + `${this.state.pageCurr}` + ".json", "", (data) => {
      this.setState({
        data: data.infor
      })
      this.props.hand(this.state.data)
    })
  }
  getData(pageCurr) {
    httpRequest.fetchGet("./data/data" + `${pageCurr}` + ".json", "", (data) => {
      this.setState({
        data: data.infor
      })
      this.props.hand(this.state.data)
    })
  }
  //创建分页
  create() {
    const {totalPage} = this.props.config;
    const {pageCurr, createNum} = this.state;
    let pages = [];
    pages.push(<li onClick={this.go.bind(this, 1)} className={pageCurr === 1 ? "nomore" : "more"} key={-1}>首页</li>)
    pages.push(<li onClick={this.goPrev.bind(this)} className={pageCurr === 1 ? "nomore" : "more"} key={0}>上一页</li>)
    if (totalPage <= 7) {
      for (let i = 1; i <= totalPage; i++) {
        //() => this.go(i)
        pages.push(<li onClick={this.go.bind(this, i)} className={pageCurr === i ? "on" : ""} key={i}>{i}</li>)
      }
    } else {
      for (let i = createNum; i <= createNum + 3; i++) {
        //() => this.go(i)
        pages.push(<li onClick={this.go.bind(this, i)} className={pageCurr === i ? "on" : ""} key={i}>{i}</li>)
      }
      pages.push(createNum !== totalPage - 6 ? <font style={{
        "height": "38px",
        "width": "44px",
        "textAlign": "center",
        "lineHeight": "38px"
      }} key={totalPage - 2}>…</font> : <li key={totalPage - 2} onClick={this.go.bind(this, totalPage - 2)} className={pageCurr === totalPage - 2 ? "on" : ""}>{totalPage - 2}</li>)
      pages.push(<li key={totalPage - 1} onClick={this.go.bind(this, totalPage - 1)} className={pageCurr === totalPage - 1 ? "on" : ""}>{totalPage - 1}</li>)
      pages.push(<li key={totalPage} onClick={this.go.bind(this, totalPage)} className={pageCurr === totalPage ? "on" : ""}>{totalPage}</li>)
    }

    pages.push(<li onClick={this.goNext.bind(this)} className={pageCurr === totalPage ? "nomore" : "more"} key={totalPage + 1}>下一页</li>)

    return pages;
  }
  // 更新 state
  go(pageCurr) {
    let {createNum} = this.state;
    const {totalPage} = this.props.config;
    this.setState({
      pageCurr,
      createNum: pageCurr <= totalPage && pageCurr > totalPage - 2 ? totalPage - 6 : pageCurr === totalPage - 3 ? createNum : pageCurr === 1 ? 1 : pageCurr === createNum - 1 ? pageCurr : pageCurr === createNum + 3 ? createNum + 1 : createNum
    })
    this.getData(pageCurr);

  }
  //上一页
  goPrev() {
    let {pageCurr, createNum} = this.state;
    if (--pageCurr === 0) {
      return
    }
    this.go(pageCurr);
  }
  //下一页
  goNext() {
    let {pageCurr} = this.state;
    let {totalPage} = this.props.config;
    if (++pageCurr > totalPage) {
      return
    }
    this.go(pageCurr);
  }
  render() {
    const Pages = this.create.bind(this)();
    return (
      <article className="w-875 pagination">
        <ul>
          {Pages}
        </ul>
      </article>
    )
  }
}
