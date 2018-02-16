import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import LeafletAntPath from "./LeafletAntPath";

export default class Projects extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <div >
        <LeafletAntPath/>
      </div >
    );
  }
};