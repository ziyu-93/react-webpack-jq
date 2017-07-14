import React, { Component } from "react";
import { Footer } from "./../components/footer";
import Header from "./../components/header";
import SecondTitle from "./../components/search";
import Nav from "./../components/nav";
import ContentTitle from "./../components/title";

export default class Rank extends Component {
  componentWillMount() {
    //console.log(this.props.location.pathname);
  }
  render() {
    return (
      <section className="w-1200">
        <Header/>
        <SecondTitle/>
        <Nav loopState={false} location={this.props.location.pathname} current={3}/>
        <RankContent/>
        <Footer/>
      </section>
    )
  }
}

//腕表库
class RankContent extends Component {
  play() {
    this.refs.video.play();
  }
  render() {
    return (
      <section className="w-1200 clearfix">
        <ContentTitle english="Ranking" text="腕表排行"/>
        <section>
          <video ref="video" width="100%" height="500px" preload="auto">
            { /* <track kind="subtitles"  srclang="en"
      label="English"/>
          <track kind="subtitles"  srclang="sv"
      label="Svenska"/> */ }
            <source src="http://content.rolex.com/is/content/Rolex/new_cosmograph_daytona_0001_chs1777175112476FIV_iPad_640x360_800K"></source>
          </video>
          <button onClick={() => this.play()}>play</button>
        </section>
      </section>
    )
  }
}
