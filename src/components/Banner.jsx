import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Banner({ src, className = '' }) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <div className={`banner ${className}`.trim()}>
      <img src={imageSrc} alt="Banner" className="banner__image" />
    </div>
  );
}

Banner.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Banner;
