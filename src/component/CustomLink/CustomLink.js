import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-scroll";

import "./CustomLink.css";

const CustomLink = ({ linkText, to, variant = 'secondary', onClick }) => {

  const getClassName = () => {
    if (variant === 'primary') {
      return "primary slide ml-4 cursor-pointer px-[25px] py-[6px] rounded-full my-auto";
    } else {
      return "secondary";
    }
  };

  return (
    <Link
      onClick={onClick}
      to={to}
      className={getClassName()}
      spy={true}
      smooth={true}
      duration={1000}
    >
      {linkText}
    </Link>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func
};

export default CustomLink;