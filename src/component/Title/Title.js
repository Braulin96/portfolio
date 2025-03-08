import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = (props) => {
  return (
    <div className="title">
      {/* Component content goes here */}
    </div>
  );
};

Title.propTypes = {
  // Define your prop types here
  // example: name: PropTypes.string.isRequired,
};

Title.defaultProps = {
  // Define default props here
  // example: name: 'Default Name',
};

export default Title;
