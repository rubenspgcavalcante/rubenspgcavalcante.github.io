import React, { PureComponent } from 'react';
import { object } from "prop-types";
import "./style/_progressive_image.scss";


export default class ProgressiveImage extends PureComponent {
  static propTypes = {
    source: object.isRequired
  };

  state = { ready: false, fade: false };

  componentWillMount() {
    const img = new Image();
    img.src = this.props.source.src;
    img.onload = () => {
      this.setState({ ready: true });
      setTimeout(() => this.setState({ fade: true }), 1000)
    };
  }

  render() {
    const { ready, fade } = this.state;
    const { source } = this.props;

    return (
      <div className="progressive-image">
        <img className="thumbnail" src={source.trace}/>
        {ready ? <img className={`original ${fade ? 'ready' : ''}`} src={source.src}/> : null}
      </div>
    );
  }
};