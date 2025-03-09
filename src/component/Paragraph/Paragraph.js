import PropTypes from "prop-types";

import "./Paragraph.css";

const Paragraph = ({ firstText, secondText, customClasses = "" }) => {
  return (
    <div className="paragraph">
      <p
        className="sm:text-4xl text-2xl text-gray-200 font-extralight lg:mt-12 mt-6 z-20"
      >
        {firstText}
        {secondText && (
          <span className={`font-normal ml-2 text-primary-green ${customClasses}`}>
            {secondText}
          </span>
        )}
        .
      </p>
    </div>
  );
};

Paragraph.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string,
  customClasses: PropTypes.string,
};

export default Paragraph;
