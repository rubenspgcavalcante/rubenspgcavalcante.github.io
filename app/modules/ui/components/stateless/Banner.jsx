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

  state = { sources: [], showHD: false, startTransition: false };

  componentWillMount() {
    const { PICTURE } = this.props;
    const sourcesPromises = AVAILABLE_SIZES
      .map(([width, height]) => generateSource(PICTURE, width, height));

    const buffers = Promise
      .all(sourcesPromises)
      .then(sources => {
        this.setState({ sources });

        return Promise.all(
          sources.map(({ src }) => new Promise(res => {
            const img = new Image();
            img.src = src;
            img.onload = res;
          }))
        );
      });

    buffers.then(() => {
      this.setState({ showHD: true });
      setTimeout(() => this.setState({ startTransition: true }), 2000);
    });
  }

  render() {
    const { sources, showHD, startTransition } = this.state;
    if (!sources.length) {
      return null
    }


    return (
      <div className="banner">
        {showHD ?
          <picture className={`banner-container ${startTransition ? 'show' : 'hide'}`}>
            {sources.map(({ width, src }) =>
              <source key={width} media={`(max-width: ${width}px)`} srcSet={src}/>)
            }
            <img src={sources[2].src} alt='banner'/>
          </picture> : null
        }
        <picture className={`banner-thumbs ${startTransition ? 'hide' : ''}`}>
          {sources.map(({ width, thumb }) =>
            <source key={width} media={`(max-width: ${width}px)`} srcSet={thumb}/>)
          }
          <img src={sources[2].thumb} alt='banner'/>
        </picture>
      </div>
    );
  }
}