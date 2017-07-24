import React, { Component } from "react";
import { Footer } from "./../components/footer";
import Header from "./../components/header";
import SecondTitle from "./../components/search";
import Nav from "./../components/nav";
import ContentTitle from "./../components/title";
import Pagination from "./../components/page";
import HotMessage from "./../components/hotMessage";
import { Link } from "react-router-dom";
import httpRequest from "./../tool/tools";
import warning from "./../tool/warning";
export default class Infor extends Component {
  componentWillMount() {
    //console.log(this.props.location.pathname);
  }
  render() {
    return (
      <section>
        <Header/>
        <SecondTitle/>
        <Nav loopState={false} location={this.props.location.pathname} current={0}/>
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
  componentDidMount() {
    httpRequest.fetchGet("http://localhost:3000/data/data" + `${sessionStorage.lastPage ? sessionStorage.lastPage : this.state.pageCurr}` + ".json", {
      page: `${this.state.pageCurr}`
    }, (data) => {
      this.setState({
        data: data.infor
      })
      sessionStorage.lastPage = this.state.pageCurr;
    //  this.props.hand(this.state.data)
    },
      (error) => {
        console.log(error);
      }
    )
  }
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
        return <ListInfor key={i} src={e.img} title={e.title} time={e.time} from={e.from} auther={e.author} context={e.context} id={e.id}/>
      }) : <h2 style={{
        "textAlign": "center"
      }}>没有数据了</h2>
      }
          </article>
          <Pagination ref="list" config={{
        totalPage: 15
      }} hand={this.handValue.bind(this)}/>
          { /* this.handValue.bind(this) 可以传值，默认传递的是 子组件hand方法里的值  bind 直接就执行方法*/ }
        </article>
        <HotMessage/>
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
