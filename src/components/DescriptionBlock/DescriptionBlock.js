import PropTypes from "prop-types";

import FadeOnScroll from "utils/FadeOnScroll";
import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";

import "./DescriptionBlock.css";

const DescriptionBlock = ({
  firstTitleWord,
  secondTitleWord,
  firstText,
  secondText,
  isTitleFirst = false
}) => {
  return (
      <div className="descriptionblock h-full w-full group ">
        <div className="max-w-7xl h-full flex items-center justify-center mx-auto">
          <div className="lg:flex items-center justify-center mx-auto px-4">
            <div className={!isTitleFirst ? "order-2" : ""}>
              <FadeOnScroll data="fade" duration="1000" delay="0">
                <Title
                  firstWord={firstTitleWord}
                  secondWord={secondTitleWord}
                  customClasses="group-hover:text-primary-green transition-all duration-1000 opacity-20"
                />
              </FadeOnScroll>
            </div>
            <div className={!isTitleFirst ? "order-1" : ""}>
              <FadeOnScroll data="fade" duration="1000" delay="500">
                <Paragraph firstText={firstText} secondText={secondText} />
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </div>

  );
};

DescriptionBlock.propTypes = {
  firstTitleWord: PropTypes.string.isRequired,
  secondTitleWord: PropTypes.string,
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.string,
  isTitleFirst: PropTypes.bool
};

export default DescriptionBlock;
