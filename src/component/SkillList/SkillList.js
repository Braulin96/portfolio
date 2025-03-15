import PropTypes from "prop-types";

import FadeOnScroll from "components/shared/FadeOnScroll";

const SkillList = ({ skills, delay, hasMarginTop = false }) => {
  return (
    <FadeOnScroll data="fade" delay={delay} duration="1000">
      <ul className={`font-light flex flex-col gap-y-[4px] mx-auto w-40 ${hasMarginTop ? 'lg:mt-16' : ''}`}>
        {skills.map((skill, index) => (
          <li className="sm:text-[18px] text-[16px] hover:text-primary-green transition-colors duration-700" key={index}>{skill}</li>
        ))}
      </ul>
    </FadeOnScroll>
  );
};

SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.string.isRequired,
  hasMarginTop: PropTypes.bool
};

export default SkillList;