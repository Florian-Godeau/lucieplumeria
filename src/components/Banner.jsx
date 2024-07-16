import React from 'react';
import PropTypes from 'prop-types';

function Banner({ src }) {
  return (
    <div className="banner">
      <img src={src} alt="Banner" className="banner-image" />
    </div>
  );
}

Banner.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Banner;