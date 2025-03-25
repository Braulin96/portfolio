import { useState } from "react";
import PropTypes from "prop-types";

import FadeOnScroll from "utils/FadeOnScroll";
import TiltAnimation from "utils/TiltAnimation";
import SlideCarousel from "components/SlideCarousel/SlideCarousel";
import CustomModal from "components/CustomModal/CustomModal";

import { GoArrowUpRight } from "react-icons/go";

const ModuleProject = ({
  number,
  projectName,
  rule,
  description,
  liveLink,
  gitHub,
  show,
  projectImages,
  frameworksList
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-7xl flex items-center mx-auto relative">
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
                <p className="text-3xl font-semibold"> {rule} </p>
                <p className="text-3xl mt-4"> {projectName} </p>

                <p className="mt-2 text-xl">{description}</p>
                <div className="md:hidden flex flex-col justify-center pt-12 overflow-hidden mx-auto">
                  <SlideCarousel isMobile projectImages={projectImages} />
                  <p className="text-sm mt-8 underline flex md:hidden">
                    Frameworks:
                  </p>
                </div>
                <div className="bg-white bg-opacity-5 w-fit rounded-full flex mb-12 gap-x-2 md:mt-12 mt-6 md:mx-0 mx-auto">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fade cursor-pointer px-6 py-1.5 rounded-full my-auto flex"
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
              <p className="text-xl md:flex hidden">Frameworks: <span>{frameworksList.map((frames,i) => 
                <p className="text-red-300 inline-flex ml-[4px]" key={i}>{frames} {i+1 < frameworksList.length ? ",":""}</p>
              )}</span></p>
            </div>
          </FadeOnScroll>
        </div>
        <div className="md:flex flex-col hidden my-auto gap-y-20 w-full relative">
          <FadeOnScroll data="fade" delay="400" duration="1000" offset="600">
            {projectImages.map((image) => (
              <div
                key={image.id}
                className="flex h-full flex-col my-auto items-center justify-center"
                style={{ height: "100vh" }}
              >
                <TiltAnimation>
                  <div className="relative p-[30px]">
                    <img
                      className="rounded-xl"
                      width={800}
                      src={image.src}
                      alt={image.alt}
                    />
                    <div className="absolute h-full w-full top-0 left-0 right-0 bottom-0  bg-opacity-30 hover:bg-opacity-0 transition-all duration-700"></div>
                  </div>
                </TiltAnimation>
              </div>
            ))}
          </FadeOnScroll>
          <div className="absolute bottom-[100px] right-[0px] z-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="size-[28px] rounded-full bg-secondary-gray bg-opacity-50 hover:bg-opacity-100 transition-all duration-700 flex items-center justify-center text-[15px] text-black"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <SlideCarousel projectImages={projectImages} />
      </CustomModal>
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
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  frameworksList:PropTypes.array
};

export default ModuleProject;
