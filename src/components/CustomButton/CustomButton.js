import React from 'react';
import PropTypes from 'prop-types';

import './CustomButton.css';

const CustomButton = ({ variant = 'primary'}) => {
  return (
    <div className="customButton">
      {/* Component content goes here */}
    </div>
  );
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary'])
};

CustomButton.defaultProps = {
  // Define default props here
  // example: name: 'Default Name',
};

export default CustomButton;
