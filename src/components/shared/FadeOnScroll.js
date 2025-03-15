import PropTypes from 'prop-types';
import { useEffect } from "react";
// Note: components:
import AOS from "aos";
import "aos/dist/aos.css";

const FadeOnScroll = ({ data,duration, delay, children, offset, className }) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
    });
  }, []);
    const offsetValue = offset || 200;
  return (
    <div
        className={className}
      data-aos={data}
      data-aos-offset={offsetValue}
      data-aos-easing="ease-in-sine"
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      {children}
    </div>
  );
};

FadeOnScroll.propTypes = {
  data: PropTypes.string.isRequired,
  duration: PropTypes.string,
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
};

export default FadeOnScroll;
