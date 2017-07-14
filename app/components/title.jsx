import React, { Component } from "react";

export default class ContentTitle extends Component {
  render() {
    return (
      <section className="content-title">
        <h2>
          <span className="title-l">{this.props.english}</span>
          <span className="title-r">{this.props.text}</span>
        </h2>
      </section>
    )
  }
}
