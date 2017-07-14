import React, { Component } from "react";
import { Footer } from "./../components/footer";
import Header from "./../components/header";
import SecondTitle from "./../components/search";
import Nav from "./../components/nav";
import ContentTitle from "./../components/title";
import Pagination from "./../components/page"
export default class WatchLibrary extends Component {
  componentWillMount() {
    //console.log(this.props.location.pathname);
  }
  render() {
    return (
      <section className="w-1200">
        <Header/>
        <SecondTitle/>
        <Nav loopState={false} location={this.props.location.pathname} current={1}/>
        <LibraryContent/>
        <Footer/>
      </section>
    )
  }
}
//类选
const SelectOption = ({name, array}) => (
  <div>
    <div className="f-l selectOT">{`${name}:`}<span>不限</span></div>
    <ul>
      {
  array.map((e, i) => {
    return <li className="option" key={i}>
            {e}
          </li>
  })
  }
    </ul>
  </div>
)
//腕表库
class LibraryContent extends Component {
  render() {
    return (
      <section className="w-1200 clearfix">
        <ContentTitle english="Offer" text="腕表报价"/>
        <WatchChoose/>
      </section>
    )
  }
}


//类别筛选
class WatchChoose extends Component {
  render() {
    return (
      <section className="w-1200">

      </section>
    )
  }
}
