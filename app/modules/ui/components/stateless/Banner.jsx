import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import { AVAILABLE_SIZES } from "../../constants/banners";
import "../style/_banner.scss";

const context = require.context("assets/banners", true, /\.png/);

const generateSource = (path, width, height) => new Promise(res => {
  const fileName = thumb => `${path}.${width}x${height}${thumb ? '.thumb' : ''}.png`;

  const src = context(fileName());
  const thumb = context(fileName(true));

  res({ width, height, src, thumb });
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
    const {children} = this.props;
    if (!sources.length) {
      return null
    }

    return (
      <div className="banner">
        <picture className="banner-thumbs">
          {sources.map(({ width, thumb }) =>
            <source key={width} media={`(max-width: ${width}px)`} srcSet={thumb}/>)
          }
          <img src={sources[2].thumb} alt='banner'
               onLoad={this._onImageLoad.bind(this)}/>
        </picture>
        {showHD ?
          <picture className={`banner-container ${startTransition ? 'show' : ''}`}>
            {sources.map(({ width, src }) =>
              <source key={width} media={`(max-width: ${width}px)`} srcSet={src}/>)
            }
            <img src={sources[2].src} alt='banner'/>
          </picture> : null
        }
        {children}
      </div>
    );
  }
}