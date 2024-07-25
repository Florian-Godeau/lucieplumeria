import React from 'react';
import PropTypes from 'prop-types';

function TitleContent({ title, subtitle }) {
  return (
    <div className="title-content">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

TitleContent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

TitleContent.defaultProps = {
  subtitle: '',
};

export default TitleContent;
