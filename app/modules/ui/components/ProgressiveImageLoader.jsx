import React, { PureComponent } from "react";
import ProgressiveImage from "react-progressive-image";
import classNames from "classnames";
import "./style/_progressive_image_loader.scss";

const TransitionBlock = ({ src, trace, alt, show, transitionReady }) =>
  <div className="wrapper">
    <img className={classNames("thumb", { fade: transitionReady })} src={trace} alt={alt}/>
    {show ? <img className={classNames("picture", { ready: transitionReady })} src={src} alt={alt}/> : null}
  </div>;

export default class ProgressiveImageLoader extends PureComponent {
  state = { reachedViewPort: false, transition: false };

  intersectionObs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        this.setState({ reachedViewPort: true });
        this.intersectionObs.disconnect();
      }
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    }
  );

  componentDidMount() {
    this.intersectionObs.observe(this.refs.wrapper);
  }

  componentWillUnmount() {
    this.intersectionObs.disconnect();
  }

  render() {
    const { image, alt, className } = this.props;
    const { transition, reachedViewPort } = this.state;
    const timeout = 10;

    return (
      <div ref="wrapper">
        {reachedViewPort
          ? <ProgressiveImage src={image.src} placeholder={image.trace}>
            {(src, loading) => {
              if (!loading) setTimeout(() => this.setState({ transition: true }), timeout);
              return (
                <div className={classNames("progressive-image-loader", className)}>
                  <TransitionBlock transitionReady={transition} show={!loading} {...image} alt={alt}/>
                </div>
              )
            }}
          </ProgressiveImage>
          : <img src={image.trace}/>
        }
      </div>
    )

  }
}