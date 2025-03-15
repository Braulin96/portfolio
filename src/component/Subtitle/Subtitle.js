import PropTypes from "prop-types";

import "./Subtitle.css";

const Subtitle = ({ text, variant = "lg", customClasses = "" }) => {
  const variantClasses = {
    lg: "text-[24px] md:text-[28px]", 
    md: "text-[22px] md:text-[26px]", 
    sm: "text-[20px] md:text-[24px]", 
  };

  const sizeClass = variantClasses[variant] || variantClasses.lg;

  return (
    <div className="subtitle">
      <p className={`${sizeClass} ${customClasses}`}>
        {text}
      </p>
    </div>
  );
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["sm", "md", "lg"]),
  customClasses: PropTypes.string
};

export default Subtitle;