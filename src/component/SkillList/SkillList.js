import PropTypes from "prop-types";

import FadeOnScroll from "components/shared/FadeOnScroll";

const SkillList = ({ skills, delay, hasMarginTop = false }) => {
  return (
    <FadeOnScroll data="fade" delay={delay} duration="1000">
      <ul className={`font-light flex flex-col gap-y-4 mx-auto w-40 ${hasMarginTop ? 'lg:mt-16' : ''}`}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
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