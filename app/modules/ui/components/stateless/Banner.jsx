import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import classNames from "classnames";
import { AVAILABLE_SIZES } from "../../constants/banners";
import "../style/_banner.scss";

const resolver = path => import(
  /* webpackChunkName: "banner-" */
  /* webpackMode: "eager" */
  `assets/banners/${path}`
  );

const generateSource = (path, width, height) => new Promise(res => {
  const fileName = thumb => `${path}.${width}x${height}${thumb ? '.thumb' : ''}.png`;

  Promise.all([resolver(fileName()), resolver(fileName(true))])
    .then(([src, thumb]) => res({ width, height, src, thumb }));
});

export default class Banner extends PureComponent {
  static propTypes = {
    PICTURE: string.isRequired
  };

  state = { sources: [], showHD: false, startTransition: false, transitionId: null };

  _onImageLoad() {
    this.setState({ showHD: true });
    const transitionId = setTimeout(() => this.setState({ startTransition: true }), 2000);
    this.setState({ transitionId });
  }

  _buildPicturesBlock(sources, isThumb = false, transition = false) {
    const fallBackSrc = isThumb
      ? sources[2].thumb
      : sources[2].src;

    const classes = classNames({ "banner-thumbs": isThumb, "banner-container": !isThumb, show: transition });

    return (
      <picture className={classes}>
        {sources.map(({ width, src, thumb }, idx) =>
          <source key={idx} media={`(${idx === sources.length - 1 ? 'min' : 'max'}-width: ${width}px)`}
                  srcSet={isThumb ? thumb : src}/>)
        }
        <img src={fallBackSrc} alt='banner'
             onLoad={() => isThumb && this._onImageLoad()}/>
      </picture>
    )
  }

  componentWillMount() {
    const { PICTURE } = this.props;
    const sourcesPromises = AVAILABLE_SIZES
      .map(([width, height]) => generateSource(PICTURE, width, height));

    Promise
      .all(sourcesPromises)
      .then(sources =>
        this.setState({ sources })
      );
  }

  componentWillUnmount() {
    const { transitionId } = this.state;

    if (transitionId) {
      clearTimeout(transitionId);
    }
  }

  render() {
    const { sources, showHD, startTransition } = this.state;
    const { children } = this.props;
    if (!sources.length) {
      return null
    }

    return (
      <div className="banner">
        {this._buildPicturesBlock(sources, true, false)}
        {showHD ?
          this._buildPicturesBlock(sources, false, startTransition) : null
        }
        {children}
      </div>
    );
  }
}