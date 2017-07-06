import React, { Component } from "react";
import { Footer } from "./../components/footer.js";
import Header from "./../components/header.js";
import SecondTitle from "./../components/search.js";
import Nav from "./../components/nav.js";
import ContentTitle from "./../components/title.js";

export default class Brand extends Component {
  componentWillMount() {
    //console.log(this.props.location.pathname);
  }
  render() {
    return (
      <section className="w-1200">
        <Header/>
        <SecondTitle/>
        <Nav loopState={false} location={this.props.location.pathname}/>
        <BrandContent/>
        <Footer/>
      </section>
    )
  }
}

//腕表库
class BrandContent extends Component {
  render() {
    return (
      <section className="w-1200 clearfix">
        <ContentTitle english="Brand" text="腕表品牌大全"/>
      </section>
    )
  }
}
