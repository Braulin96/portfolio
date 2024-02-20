//Note: component
import FadeOnScroll from "./shared/FadeOnScroll";

const Skills = () => {
  return (
    <div id="skills" style={{ height: "100vh", maxHeight: "1000px" }}>
      <div className="max-w-7xl h-full flex mx-auto">
        <div className="lg:flex items-center w-full px-4 justify-center my-auto">
          <div className="w-full">
            <div className="grid md:grid-cols-4 grid-cols-2  gap-x-10 md:text-xl text-base lg:mt-0 mt-6 gap-y-12 text-gray-200 order-last">
              <FadeOnScroll data="fade" delay="1200" duration="1000">
                <ul className="font-light flex flex-col gap-y-4 mx-auto w-40">
                  <li>React JS</li>
                  <li>JavaScript</li>
                  <li>Html & CSS</li>
                  <li>TypeScript</li>
                </ul>
              </FadeOnScroll>
              <FadeOnScroll data="fade" delay="900" duration="1000">
                <ul className="font-light flex flex-col gap-y-4 lg:mt-16 mx-auto w-40">
                  <li>Resilience</li>
                  <li>Problem-solving</li>
                  <li>Analytical Abilities</li>
                  <li>Adaptability</li>
                </ul>
              </FadeOnScroll>
              <FadeOnScroll data="fade" delay="700" duration="1000">
                <ul className="font-light flex flex-col gap-y-4 mx-auto w-40">
                  <li>Responsiveness</li>
                  <li>NPM</li>
                  <li>Git/Git Hub</li>
                  <li>Figma</li>
                </ul>
              </FadeOnScroll>
              <FadeOnScroll data="fade" delay="500" duration="1000">
                <ul className="font-light flex flex-col gap-y-4 lg:mt-16 mx-auto w-40">
                  <li>TeamWork</li>
                  <li>Continuous Learning</li>
                  <li>Project Management</li>
                  <li>Creativity</li>
                </ul>
              </FadeOnScroll>
            </div>
          </div>
          <div className="">
            <FadeOnScroll data="fade" delay="0" duration="1000">
              <p className="sm:text-8xl text-6xl font-semibold text-secondary-gray">
                Skills
              </p>
            </FadeOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
