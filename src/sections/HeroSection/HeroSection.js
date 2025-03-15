import CustomLinkBlock from "component/CustomLinkBlock/CustomLinkBlock";
import AnimatedIntro from "component/AnimatedIntro/AnimatedIntro";
import StaticIntro from "component/StaticIntro/StaticIntro";

import Curriculum from "assets/documents/curriculum.pdf";

const HeroSection = () => {
  return (
    <div id="home" style={{ height: "100vh", maxHeight: "1000px" }}>
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="my-auto mx-auto text-center flex flex-col gap-y-4">
          <div className="hidden sm:block">
            <AnimatedIntro />
          </div>
          <div className="sm:hidden">
            <StaticIntro />
          </div>
        </div>
        <div className="sm:animate-fade-up sm:animate-delay-[7s] sm:animate-duration-[1s]">
          <CustomLinkBlock href={Curriculum} hrefText="Resume" linkTo="contact" linkText="Let's Talk" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;