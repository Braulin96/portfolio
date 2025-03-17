import PropTypes from "prop-types";

import Subtitle from "component/Subtitle/Subtitle";
import Paragraph from "component/Paragraph/Paragraph";
import FadeOnScroll from "components/shared/FadeOnScroll";

import "./MindsetBlock.css";

const MindsetBlock = ({
  subtitle,
  paragraph,
  subtitleDelay,
  paragraphDelay,
}) => {
  return (
    <div className="mindsetblock">
      <div className="flex flex-col gap-y-[16px] w-full">
        <FadeOnScroll
          data="fade"
          duration="1000"
          delay={subtitleDelay}
        >
          <Subtitle customClasses="!text-gray-300" text={subtitle} />
        </FadeOnScroll>
        <div className="flex gap-x-20 md:flex-row flex-col gap-y-8 w-full">
          <div className="w-full">
            <FadeOnScroll
              data="fade"
              duration="1000"
              delay={paragraphDelay}
            >
              <Paragraph customClasses="!text-gray-300" variant="secondary" text={paragraph} />
            </FadeOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

MindsetBlock.propTypes = {
  subtitle: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  subtitleDelay: PropTypes.number.isRequired,
  paragraphDelay: PropTypes.number.isRequired,
};

export default MindsetBlock;
