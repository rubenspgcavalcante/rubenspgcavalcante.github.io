import React, { PureComponent } from 'react';
import Profile from "./Profile";

export default class Home extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <div className="col-lg-8 m-auto">
        <Profile/>
      </div>
    );
  }
};