import React, { Component } from "react";
import { Footer } from "./../components/footer";
import Header from "./../components/header";
import SecondTitle from "./../components/search";
import Nav from "./../components/nav";
import ContentTitle from "./../components/title";
import HotMessage from "./../components/hotMessage";
import httpRequest from "./../tool/tools";
import warning from "./../tool/warning"
import { Link } from "react-router-dom";
import * as Api from "./../api/api";
export default class InforItem extends Component {
  render() {
    return (
      <section>
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
    httpRequest.fetchGet(Api.API_ITEM_WATCH, "", (data) => {
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
      .html(a)
    console.log(data);
    console.log(typeof data);
    return (
      <section className="w-1200 clearfix">
         <section className="w-875 f-l inforItem">
           <article className="item-content">
             <aside className="location icon">
                <Link to={"/"}>首页</Link>
                <font>></font>
                <Link to={"/infor"}>资讯动态</Link>
                <font>></font>
                {data.title}
              </aside>
            <h1>{data.title}</h1>
            <aside className="time-author">
              <span>日期：{data.time}</span><span>作者：{data.author}</span>
            </aside>
            <aside className="content">
              {
        // data.context.map((e, i) => {
        //   return <div key={i}>
        //                   <p className="title">{e.title}</p>
        //                   <p className="text">{e.text}</p>
        //                   <img src={e.img} className="img"/>
        //                 </div>
        // })
      }
            </aside>
          </article>

        </section>
        <HotMessage/>
      </section>
    )
  }
}
