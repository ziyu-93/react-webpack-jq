import React, { Component } from "react";
import { Footer } from "./../components/footer.js";
import Header from "./../components/header.js";
import SecondTitle from "./../components/search.js";
import Nav from "./../components/nav.js";
import ContentTitle from "./../components/title.js";
import HotMessage from "./../components/hotMessage.js";
import httpRequest from "./../tool/tools.js";
import warning from "./../tool/warning.js"
import { Link } from "react-router-dom";
import "./../sass/inforItem.scss";
export default class InforItem extends Component {
  render() {
    return (
      <section className="w-1200">
        <Header/>
        <SecondTitle/>
        <Nav loopState={false} location={this.props.location.pathname} current={0}/>
        <InforItemContent/>
        <Footer/>
      </section>
    )
  }
}

class InforItemContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      id: null
    }
    this.loca = null
  }
  componentDidMount() {
    this.loca = location.pathname.lastIndexOf("/") + 1;
    this.setState({
      id: location.pathname.slice(this.loca)
    })
    httpRequest.fetchGet("http://localhost:3000/data/inforItem.json", "", (data) => {
      for (let i of data.InforItem) {
        this.state.id === i.id ? this.setState({
          data: i
        }) : this.state.id
      }
    }, (data) => {
      warning("获取失败")
    })
  }
  render() {
    const {data} = this.state;
    //console.log(data.context);
    let a = "";
    if (data.context !== undefined) {
      for (let i of data.context) {
        a += `${i.title === undefined ? "" : `<p className="title" style="line-height20px;font-weight:900;margin-bottom:20px">${i.title}</p>`}${i.text === undefined ? "" : `<p className="text" style="margin-bottom:20px;line-height20px;">${i.text}</p>`}${i.img === undefined ? "" : `<img src=${i.img} style="display:block;margin:0 auto 20px" className="img"/>`}`
      }
    //console.log(a);
    }
    $(".content")
      .html(a);
    //console.log(data);
    return (
      <section className="w-1200 clearfix">
        <section className="w-875 f-l inforItem">
          {
      data !== [] ? <div className="item-content">
            <div className="location icon">
              <Link to={"/"}>首页</Link>
              <font>></font>
              <Link to={"/infor"}>资讯动态</Link>
              <font>></font>
              {data.title}
            </div>
            <h1>{data.title}</h1>
            <div className="time-author">
              <span>日期：{data.time}</span><span>作者：{data.author}</span>
            </div>
            <div className="content">
              {
        // data.context !== undefined ? data.context.map((e, i) => {
        //   return <div key={i}>
        //               <p className="title">{e.title}</p>
        //               <p className="text">{e.text}</p>
        //               <img src={e.img} className="img"/>
        //             </div>
        // }) : <li>数据出错</li>
      }
            </div>
          </div> : <div>没有数据</div>
      }
        </section>
        <HotMessage/>
      </section>
    )
  }
}
