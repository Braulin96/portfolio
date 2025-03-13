import FadeOnScroll from "components/shared/FadeOnScroll";
import Title from "component/Title/Title";
import SkillList from  "component/SkillList/SkillList"

import { SKILLS_LIST } from "constants/skillsList";

const Skills = () => {
  return (
    <div id="skills" style={{ height: "100vh", maxHeight: "1000px" }}>
      <div className="max-w-7xl h-full flex mx-auto">
        <div className="lg:flex items-center w-full px-4 justify-center my-auto group">
          <FadeOnScroll data="fade" delay="0" duration="1000">
            <Title
              firstWord="Skills"
              customClasses="group-hover:text-primary-green transition-all duration-1000 opacity-30"
            />
          </FadeOnScroll>
          <div className="w-full">
            <div className="grid md:grid-cols-4 grid-cols-2 gap-x-10 md:text-xl text-base lg:mt-0 mt-6 gap-y-12 text-gray-200">
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
      </div>
    </div>
  );
};

export default Skills;