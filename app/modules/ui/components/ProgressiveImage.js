import React, { PureComponent } from 'react';
import { object } from "prop-types";
import { CSSTransition } from 'react-transition-group'
import "./style/_progressive_image.scss";

const FadeIn = ({ children, ...props }) =>
  <CSSTransition
    {...props}
    timeout={4000}
    classNames="convert"
  >
    {children}
  </CSSTransition>;

export default class ProgressiveImage extends PureComponent {
  static propTypes = {
    source: object.isRequired
  };

  state = { show: false };

  componentWillMount() {
    const img = new Image();
    img.src = this.props.source.src;
    img.onload = () => this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;
    const { source: { trace, src } } = this.props;

    const traceImg = new Image();
    traceImg.src = trace;

    const wrapperStyle = {
      background: `url("${trace}")`,
      height: `${traceImg.height}px`,
      width: `${traceImg.width}px`
    };

    return (
      <div className="progressive-image" style={wrapperStyle}>
        <FadeIn in={ready}>
          <img src={src}/>
        </FadeIn>
      </div>
    );
  }
};