import React, { PureComponent } from "react";
import { object } from "prop-types";

export default class AsyncComponent extends PureComponent {
  static propTypes = {
    promise: object.isRequired
  };

  state = { Component: null };

  componentDidMount() {
    this.props.promise.then(Component => this.setState({ Component }));
  }

  render() {
    const { Component } = this.state;
    if (!Component) return null;

    return this.props.children(Component);
  }
}