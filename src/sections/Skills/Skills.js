import ScreenContainer from "layout/ScreenContainer/ScreenContainer";
import FadeOnScroll from "utils/FadeOnScroll";
import Title from "components/Title/Title";
import SkillList from "components/SkillList/SkillList";

import BackgroundExample from "assets/images/bg16.jpg";

import { SKILLS_LIST } from "constants/skillsList";

const Skills = () => {
  return (
  <ScreenContainer backgroundImageOverlay={BackgroundExample}  customClasses="items-center flex" id="skills">
      <div className="lg:flex items-center group my-auto h-full">
        <FadeOnScroll data="fade" delay="0" duration="1000">
          <Title
            firstWord="Skills"
            customClasses="group-hover:text-primary-green transition-all duration-1000 opacity-30"
          />
        </FadeOnScroll>
        <div className="w-full">
          <div className="grid md:grid-cols-4 grid-cols-2 sm:gap-x-10 gap-x-[4px] md:text-xl text-base lg:mt-0 mt-6 gap-y-12 text-gray-200">
            {SKILLS_LIST.map((category, index) => (
              <SkillList
                key={index}
                skills={category.skills}
                delay={category.delay}
                hasMarginTop={category.hasMarginTop}
              />
            ))}
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
};

export default Skills;
