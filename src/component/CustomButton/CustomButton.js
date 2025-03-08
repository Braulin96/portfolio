import React from 'react';
import PropTypes from 'prop-types';

import './CustomButton.css';

const CustomButton = (props) => {
  return (
    <div className="custombutton">
      {/* Component content goes here */}
    </div>
  );
};

CustomButton.propTypes = {
  // Define your prop types here
  // example: name: PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
  // Define default props here
  // example: name: 'Default Name',
};

export default CustomButton;
