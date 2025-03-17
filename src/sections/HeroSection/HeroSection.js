import ScreenContainer from "layout/ScreenContainer/ScreenContainer";
import CustomLinkBlock from "components/CustomLinkBlock/CustomLinkBlock";
import AnimatedIntro from "components/AnimatedIntro/AnimatedIntro";
import StaticIntro from "components/StaticIntro/StaticIntro";

// import BackgroundExample from 'assets/images/bg5.jpg';

import BackgroundExample from 'assets/images/bg15.jpg';
import Curriculum from "assets/documents/curriculum.pdf";

const HeroSection = () => {
  return (
    <ScreenContainer 
      isHeroSection={true} 
      id="home" 
      backgroundImageOverlay={BackgroundExample}
    >
      <div className="mx-auto flex flex-col h-full">
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
    </ScreenContainer>
  );
};

export default HeroSection;