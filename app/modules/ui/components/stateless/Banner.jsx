import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import { AVAILABLE_SIZES } from "../../constants/banners";

const context = require.context("assets/banners", true, /\.png/);

const generateSource = (path, width, height) => new Promise(res => {
  const { src, trace } = context(`${path}.${width}x${height}.png`);
  res({ width, height, src, trace });
});


export default class Banner extends PureComponent {
  static propTypes = {
    PICTURE: string.isRequired
  };

  state = { sources: null };

  componentWillMount() {
    const { PICTURE } = this.props;
    const sourcesPromises = AVAILABLE_SIZES
      .map(([width, height]) => generateSource(PICTURE, width, height));

    Promise
      .all(sourcesPromises)
      .then((sources) => this.setState({ sources }))
  }

  render() {
    const { PICTURE } = this.props;
    const { sources } = this.state;

    return (
      PICTURE && sources ?
        <picture className='banner'>
          {sources.map(({ width, src }) =>
            <source key={width} media={`(max-width: ${width}px)`} srcSet={src}/>)
          }
          <img src={sources[2].src} alt='banner'/>
        </picture> : null
    );
  }
}