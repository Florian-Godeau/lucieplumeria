import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import sunflower300 from '../assets/images/banner/sunflower-300.webp';
import sunflower960 from '../assets/images/banner/sunflower-960.webp';
import sunflower1320 from '../assets/images/banner/sunflower-1320.webp';
import sunflower1600 from '../assets/images/banner/sunflower-1600.webp';

function Banner({ src, alt }) {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <div className="banner">
      <img
        src={imageSrc}
        srcSet={`
          ${sunflower300} 300w,
          ${sunflower960} 960w,
          ${sunflower1320} 1320w,
          ${sunflower1600} 1600w
        `}
        sizes="
          (max-width: 300px) 300px,
          (max-width: 960px) 960px,
          (max-width: 1320px) 1320px,
          1600px
        "
        alt={alt}
        className="banner__image"
      />
    </div>
  );
}

Banner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Banner.defaultProps = {
  alt: 'Banner image',
};

export default Banner;
