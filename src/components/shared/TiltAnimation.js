import PropTypes from 'prop-types';
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, // reverse the tilt direction
  max: 50, // max tilt rotation (degrees)
  perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 2000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: false, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
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
