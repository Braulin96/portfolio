import PropTypes from "prop-types";

import "./Paragraph.css";

const Paragraph = ({
  firstText,
  secondText,
  customClasses = "",
  variant = "primary",
  text
}) => {
  return (
    <div className="paragraph">
      {variant === "primary" ? (
        <p className="sm:text-[28px] text-[22px] text-gray-200 leading-tight font-extralight lg:mt-12 mt-6 z-20">
          {firstText}
          {secondText && (
            <span
              className={`font-normal ml-2 text-primary-green ${customClasses}`}
            >
              {secondText}
            </span>
          )}
        </p>
      ) : (
        <p className={`sm:text-[16px] text-[14px] text-black leading-tight font-extralight ${customClasses}`}>
          {text}
        </p>
      )}
    </div>
  );
};

Paragraph.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string,
  customClasses: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string
};

export default Paragraph;
