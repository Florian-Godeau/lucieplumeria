import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Banner({ src }) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <div className="banner">
      <img src={imageSrc} alt="Banner" className="banner__image" />
    </div>
  );
}

Banner.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Banner;
