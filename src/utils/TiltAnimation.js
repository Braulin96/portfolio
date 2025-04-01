import PropTypes from 'prop-types';

import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, 
  max: 50, 
  perspective: 2000, 
  scale: 1.05, 
  speed: 2000, 
  transition: true, 
  axis: null, 
  reset: false,
  easing: "cubic-bezier(.03,.98,.52,.99)", 
  perspectiveOrigin: "left",
  glare: false,
  maxGlare: 2,
  glarePrerender: false,
};
const TiltAnimation = ({ children }) => {
  return (
    <Tilt options={defaultOptions} >
      {children}
    </Tilt>
  );
};


TiltAnimation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TiltAnimation;
