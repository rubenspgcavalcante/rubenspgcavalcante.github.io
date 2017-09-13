import React, { PureComponent } from 'react';
import { number, object, string } from 'prop-types';

export default class  extends PureComponent {
  static propTypes = {
    order: number.isRequired,
    id: string.isRequired,
    label: string.isRequired,
    route: string.isRequired,
    module$: object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      Component: null
    }
  }

  componentWillMount() {
    const { module$, order, id, route, label } = this.props;
    this.props.loading(true);

    module$.subscribe(pack => {
      const module = pack['default'];

      this.props.loading(false);
      this.props.moduleLoaded({ order, id, route, label, ...module });

      this.setState({ Component: module.Component });
    });
  }

  render() {
    const { Component } = this.state;

    return (
      <div >
        {Component ? <Component /> : null}
      </div >
    );
  }
};