//Note: component
import FadeOnScroll from "./shared/FadeOnScroll";

const AboutMe = () => {
  return (
    <div id="aboutMe" style={{ height: "100vh", maxHeight: "1000px" }}>
      <div className="max-w-7xl h-full flex items-center justify-center mx-auto ">
        <div className="lg:flex items-center justify-center mx-auto px-4">
        <FadeOnScroll data="fade" duration="1000" delay="0">
          <p className="sm:text-8xl text-6xl font-semibold text-secondary-gray  lg:leading-tight leading-none lg:mr-12">
            About
            <br />
            Me
          </p>
          </FadeOnScroll>
          <FadeOnScroll data="fade" duration="1000" delay="500">
            <p className="sm:text-4xl text-2xl text-gray-200 font-extralight lg:mt-12 mt-6 z-20">
              A front-End Developer who loves creating websites that are not
              only visually appealing but also
              <span className="font-normal ml-2 text-primary-green">
                user-friendly
              </span>
              .
            </p>
          </FadeOnScroll>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
