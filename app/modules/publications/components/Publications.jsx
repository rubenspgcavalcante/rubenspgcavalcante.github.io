import React, { PureComponent } from 'react';
import Publication from "./Publication";

export default class Publications extends PureComponent {
  static propTypes = {};

  componentDidMount() {
    this.props.loadPublications();
  }

  render() {
    const { data } = this.props.publications || {};
    if (!data) return null;

    return (
      <div id="publications">
        {data.map(pub => <Publication key={pub.id} {...pub}/>)}
      </div>
    );
  }
};