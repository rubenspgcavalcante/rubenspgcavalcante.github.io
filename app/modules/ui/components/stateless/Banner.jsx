import React from 'react';
import { string } from 'prop-types';
import { AVAILABLE_SIZES } from "../../constants/banners";

const generateSource = (path, width, height) => `${path}.${width}x${height}.png`;

const Banner = ({ PICTURE }) => (
  PICTURE ?
    <picture className='banner' >
        {AVAILABLE_SIZES.map(([width, height]) =>
          <source key={width} media={`(max-width: ${width}px)`} srcSet={generateSource(PICTURE, width, height)} />)
        }
        <img src={generateSource(PICTURE, ...AVAILABLE_SIZES[2])} alt='banner' />
    </picture > : null
);

Banner.propTypes = {
  PICTURE: string
};

export default Banner;