//Note: hooks
import PropTypes from 'prop-types';
import { useRef } from "react";
//Note: components:
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  EffectCube,
} from "swiper/modules";
import "swiper/css/bundle";
import TiltAnimation from "./shared/TiltAnimation";
import FadeOnScroll from "./shared/FadeOnScroll";
//Note:images/icons:
import { GoArrowUpRight } from "react-icons/go";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";
//------Dashboard TWD
import HeroSectionTWD from "../assets/images/dashboardTWD/homeTWD.jpeg";
import ClinicTWD from "../assets/images/dashboardTWD/clinicTWD.jpeg";
import LifestyleTWD from "../assets/images/dashboardTWD/lifestyleTWD.jpeg";
//---Website TWD
import HeroSectionTWDWeb from "assets/images/webTWD/homeTWDWeb.png";
import HealthTWDWeb from "assets/images/webTWD/healthTWDWeb.png";
import StaffTWDWeb from "assets/images/webTWD/staffTWDWeb.png";
//---RosaCleaning
import HeroSectionRosa from "../assets/images/rosaCleaning/heroSectionRosa.png";
import PriceRosa from "../assets/images/rosaCleaning/priceRosa.png";
import StepsRosa from "../assets/images/rosaCleaning/stepsRosa.png";

const DashboardTWD = [
  { id: 1, src: HeroSectionTWD, alt: "Hero section TWD" },
  { id: 2, src: ClinicTWD, alt: "Clinic TWD" },
  { id: 3, src: LifestyleTWD, alt: "Lifestyle TWD" },
];

const TWDWeb = [
  { id: 1, src: HeroSectionTWDWeb, alt: "Hero section website TWD" },
  { id: 2, src: HealthTWDWeb, alt: "Health website TWD" },
  { id: 3, src: StaffTWDWeb, alt: "Staff website TWD" },
];

const RosaCleaning = [
  { id: 1, src: HeroSectionRosa, alt: "Hero section RosaCleaning" },
  { id: 2, src: PriceRosa, alt: "Pricing RosaCleaning" },
  { id: 3, src: StepsRosa, alt: "Steps RosaCleaning" },
];

const SlideCarousel = ({ projectImages }) => {
  const swiperRef = useRef();
  return (
    <div
      className="w-fit relative sm:px-20"
      style={{ maxWidth: "calc(100w - 10px)", width: "calc(100vw - 2rem)" }}
    >
      <Swiper
        className="flex w-full px-20 relative justify-center items-center mx-auto"
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        spaceBetween={5}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.7,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[
          EffectCube,
          Pagination,
          EffectCoverflow,
          Autoplay,
          Navigation,
          Scrollbar,
        ]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {projectImages.map((image) => (
          <SwiperSlide className="mx-auto w-full flex mb-4" key={image.id}>
            <img
              className="h-full mx-auto mb-4 rounded-md"
              //width={400}
              style={{ maxHeight: "350px" }}
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="z-20 absolute left-0 top-1/2 transform -translate-y-1/2 rounded-full">
        <button
          className="bg-[#68736C] shadow-lg border rounded-full p-1 hover:bg-opacity-70"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <HiArrowSmallLeft
            color="White"
            className="opacity-70 hover:opacity-100"
            size={30}
          />
        </button>
      </div>
      <div className="z-20 absolute right-0 top-1/2 transform -translate-y-1/2 rounded-full">
        <button
          className="bg-[#68736C] shadow-lg border rounded-full p-1 hover:bg-opacity-70"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <HiArrowRight
            color="White"
            className="opacity-70 hover:opacity-100"
            size={30}
          />
        </button>
      </div>
    </div>
  );
};

SlideCarousel.propTypes = {
  projectImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};

const ModuleProject = ({
  number,
  projectName,
  rule,
  description,
  liveLink,
  gitHub,
  show,
  projectImages,
}) => {
  return (
    <div className="max-w-7xl flex items-center mx-auto px-4">
      <div className="flex h-full gap-x-12">
        <div
          className="flex flex-col justify-center gap-y-20 md:sticky md:h-[100vh] w-full"
          style={{
            top: 0,
          }}
        >
          <FadeOnScroll data="fade" delay="200" duration="1000">
            <div className="my-auto text-white font-light">
              <div className="bg-[#F5F5F5] rounded-full w-10 aspect-square md:flex hidden items-center border-2">
                <p className="mx-auto text-lg text-secondary-blue">{number}</p>
              </div>
              <div className="flex flex-col md:py-28 py-0 mr-2">
                <p className="text-3xl ml-4 font-semibold"> {rule} </p>
                <p className="text-3xl ml-4 mt-4"> {projectName} </p>
                
                <p className="ml-4 mt-2 text-xl">{description}</p>
                <div className="md:hidden flex flex-col justify-center pt-12 overflow-hidden">
                  <SlideCarousel projectImages={projectImages} />
                  <p className="text-sm mt-8 underline flex md:hidden">
                    React App
                  </p>
                </div>
                <div className="bg-white bg-opacity-5 px-4 w-fit rounded-full flex mb-12 gap-x-2 md:mt-12 mt-6 md:mx-0 mx-auto">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fade ml-4 cursor-pointer px-6 py-1.5 rounded-full my-auto flex"
                  >
                    <p className="font-semibold text-lg">{show}</p>
                    <GoArrowUpRight size={20} className="my-auto" />
                  </a>
                  <a
                    href={gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondaryButton my-auto px-2 text-white hover:opacity-90 text-lg cursor-pointer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <p className="text-xl underline md:flex hidden">React App</p>
            </div>
          </FadeOnScroll>
        </div>
        <div className="md:flex flex-col hidden my-auto gap-y-20 w-full">
          <FadeOnScroll data="fade" delay="400" duration="1000" offset="600">
            {projectImages.map((image) => (
              <div
                key={image.id}
                className="flex h-full flex-col my-auto items-center justify-center"
                style={{ height: "100vh" }}
              >
                <TiltAnimation>
                  <img
                    className="rounded-xl"
                    width={800}
                    src={image.src}
                    alt={image.alt}
                  />
                </TiltAnimation>
              </div>
            ))}
          </FadeOnScroll>
        </div>
      </div>
    </div>
  );
};

const ProjectsList = () => {
  return (
    <div id="projectList" className="flex flex-col md:gap-y-0 gap-y-24">
      <ModuleProject
        number="01"
        projectName="Dashboard TWD"
        rule="Front-End Developer"
        description="The Wellbeing Doctors' dashboard facilitates the creation of personalized action plans for users, alongside features for tracking health progress and accessing various health resources."
        show="Watch live"
        liveLink="https://app.thewellbeingdoctors.com/auth?redirect=/dashboard/"
        gitHub="https://github.com/twd-tech/twd-health"
        projectImages={DashboardTWD}
      />
      <ModuleProject
        number="02"
        projectName="TWD Website"
        rule="Front-End Developer/ Web Designer"
        description="The Wellbeing Doctors' website provides comprehensive information about the services offered, including details on pricing, health improvement strategies, getting started, partnerships, and testimonials."
        show="Watch live"
        liveLink="https://thewellbeingdoctors.com/"
        gitHub="https://github.com/twd-tech/website"
        projectImages={TWDWeb}
      />
      <ModuleProject
        number="03"
        projectName="Rosa Cleaning"
        rule="Front-End Developer/ Web Designer"
        description="Rosa Cleaning's website offers a comprehensive platform for cleaning services, enabling users to schedule appointments, and customize cleaning plans (not live yet)."
        show="Figma"
        liveLink="https://www.figma.com/proto/uGHdoF52BopWJxx44cr3wR/Untitled?type=design&node-id=564-461&t=ulYqSWCH6enl6Qa7-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=544%3A536&mode=design"
        gitHub="https://github.com/Braulin96/RosaCleaning"
        projectImages={RosaCleaning}
      />
      {/* <SwiperProject /> */}
    </div>
  );
};

ModuleProject.propTypes = {
  number: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  rule: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  gitHub: PropTypes.string.isRequired,
  show: PropTypes.string.isRequired,
  projectImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ProjectsList;
