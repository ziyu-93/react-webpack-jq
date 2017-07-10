import React, { Component } from 'react';
import { Link } from "react-router-dom";
import httpRequest from "./../tool/tools.js";
//分页
export default class Pagination extends Component {
  constructor(props) {
    super(props)
    // 设置当前页码，默认为第一页
    this.state = {
      pageCurr: sessionStorage.lastPage ? sessionStorage.lastPage : 1,
      createNum: 1,
      data: []
    }
  }
  getData(pageCurr) {
    //console.log(window.offsetTop);
    httpRequest.fetchGet("http://localhost:3000/data/data" + `${pageCurr}` + ".json", {
      page: `${pageCurr}`
    }, (data) => {
      this.setState({
        data: data.infor
      })
      sessionStorage.lastPage = pageCurr;
      this.props.hand(this.state.data);
    // window.navigate("http://localhost:3000/infor")
    }, (data) => {
      this.setState({
        data: []
      })
      this.props.hand(this.state.data)
    //warning("出错了,出错了！！");
    })
  }
  // componentDidUpdate(prevProps, prevState) {
  //   this.getData()
  // }
  //创建分页
  create() {
    const {totalPage} = this.props.config;
    const {pageCurr, createNum} = this.state;
    let pages = [];
    //首页
    pages.push(<li onClick={this.go.bind(this, 1)} className={pageCurr === 1 ? "nomore" : "more"} key={-1}>首页</li>)
    //上一页
    pages.push(<li onClick={this.goPrev.bind(this)} className={pageCurr === 1 ? "nomore" : "more"} key={0}>上一页</li>)
    if (totalPage <= 7) {
      for (let i = 1; i <= totalPage; i++) {
        //() => this.go(i)
        pages.push(<li onClick={this.go.bind(this, i)} className={pageCurr * 1 === i ? "on" : ""} key={i}>{i}</li>)
      }
    } else {
      for (let i = createNum; i <= createNum + 3; i++) {
        //() => this.go(i)
        pages.push(<li onClick={this.go.bind(this, i)} className={pageCurr * 1 === i ? "on" : ""} key={i}>{i}</li>)
      }
      //分页中的省略号
      pages.push(createNum !== totalPage - 6 ? <font style={{
        "height": "38px",
        "width": "44px",
        "textAlign": "center",
        "lineHeight": "38px"
      }} key={totalPage - 2}>…</font> : <li key={totalPage - 2} onClick={this.go.bind(this, totalPage - 2)} className={pageCurr === totalPage - 2 ? "on" : ""}>{totalPage - 2}</li>)
      //倒数第二页
      pages.push(<li key={totalPage - 1} onClick={this.go.bind(this, totalPage - 1)} className={pageCurr === totalPage - 1 ? "on" : ""}>{totalPage - 1}</li>)
      //倒数第一页
      pages.push(<li key={totalPage} onClick={this.go.bind(this, totalPage)} className={pageCurr === totalPage ? "on" : ""}>{totalPage}</li>)
    }
    //下一页
    pages.push(<li onClick={this.goNext.bind(this)} className={pageCurr === totalPage ? "nomore" : "more"} key={totalPage + 1}>下一页</li>)

    return pages;
  }
  // 更新 state
  go(pageCurr) {
    let {createNum} = this.state;
    const {totalPage} = this.props.config;
    this.setState({
      pageCurr,
      createNum: totalPage < 7 ? createNum : pageCurr <= totalPage && pageCurr > totalPage - 2 ? totalPage - 6 : pageCurr === totalPage - 3 ? createNum : pageCurr === 1 ? 1 : pageCurr === createNum - 1 ? pageCurr : pageCurr === createNum + 3 ? createNum + 1 : createNum
    })
    this.getData(pageCurr);
  }
  //上一页
  goPrev() {
    let {pageCurr} = this.state;
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
