import React, { PureComponent } from 'react';
import Profile from "./Profile";

export default class Home extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <div className="m-auto">
        <Profile/>
      </div>
    );
  }
};