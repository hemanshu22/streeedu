import React, { Component } from "react";

export default class Helmet extends Component {
  componentWillReceiveProps(props) {
    document.title = props.title;
  }

  render() {
    return <div />;
  }
}
