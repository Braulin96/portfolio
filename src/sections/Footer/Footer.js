import { useMediaQuery } from "react-responsive";

import ScreenContainer from "layout/ScreenContainer/ScreenContainer";
import MindsetBlock from "components/MindsetBlock/MindsetBlock";
import FadeOnScroll from "utils/FadeOnScroll";
import Paragraph from "components/Paragraph/Paragraph";
import BackOnTop from "components/BackOnTop/BackOnTop";
import Contact from "components/Contact/Contact";

import { SOCIAL_LINKS } from "constants/socialLinks";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width : 640px)",
  });

  return (
    <ScreenContainer
      id="footer"
      customClasses="relative text-secondary-blue bg-black bg-opacity-30 !h-fit !py-[30px] "
    >
      <div className="pt-20 flex gap-x-[20px] sm:flex-row flex-col">
        <MindsetBlock
          subtitle="Braulin Pires"
          paragraph="I believe that we are what we feed, learn, read, and hear, so
                  I am constantly seeking to learn what I do not know and
                  improve what I do know, because it is important to know your
                  abilities, but even more important is to know your
                  limitations."
          subtitleDelay={0}
          paragraphDelay={200}
        />
        <div className="w-full flex flex-col mt-4">
          <div className="sm:gap-x-16 gap-x-10 sm:mt-0 mt-4 mx-auto ">
            <FadeOnScroll
              className="mx-auto"
              data="fade"
              duration="600"
              delay="800"
            >
              <Contact socialLinks={SOCIAL_LINKS} />
            </FadeOnScroll>
            <Paragraph text="Braulin Pires" />
          </div>
        </div>
        {isMobile ? (
          <div className="flex">
            <BackOnTop isMobile={true} iconSize={15} />
          </div>
        ) : (
          <div className="flex">
            <FadeOnScroll data="fade" duration="1000" delay="1400">
              <BackOnTop iconColor="white" />
            </FadeOnScroll>
          </div>
        )}
      </div>
      <FadeOnScroll data="fade" duration="1000" delay="1000" offset={10}>
        <Paragraph
          customClasses="!text-[12px] !text-gray-200 mx-auto mt-[20px]"
          variant="secondary"
          text="@2024 Braulin Pires. All rights reserved."
        />
      </FadeOnScroll>
    </ScreenContainer>
  );
};
export default Footer;
