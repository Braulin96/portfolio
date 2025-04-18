import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useMediaQuery } from "react-responsive";

import FadeOnScroll from "utils/FadeOnScroll";
import TiltAnimation from "utils/TiltAnimation";
import SlideCarousel from "components/SlideCarousel/SlideCarousel";
import CustomModal from "components/CustomModal/CustomModal";
import Subtitle from "components/Subtitle/Subtitle";
import CustomLinkBlock from "components/CustomLinkBlock/CustomLinkBlock";

import { FaPlus } from "react-icons/fa";

const ModuleProject = ({
  number,
  projectName,
  description,
  liveLink,
  gitHub,
  show,
  projectImages,
  frameworksList,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => setIsModalOpen(false);

  const numberOfProjectsImages = 3;
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    setIsModalOpen(false);
  }, [isMobile]);

  return (
    <div className="flex items-center mx-auto relative">
      <div className="flex h-full gap-x-12">
        <div
          className="flex flex-col justify-center gap-y-20 md:sticky md:h-[100vh] w-full"
          style={{
            top: 0,
          }}
        >
          <FadeOnScroll data="fade" delay="200" duration="1000">
            <div className="my-auto text-white font-light">
              <div className="bg-[#F5F5F5] rounded-full w-[40px] aspect-square md:flex hidden items-center border-2">
                <p className="mx-auto text-lg text-secondary-blue">{number}</p>
              </div>
              <div className="flex flex-col lg:py-[80px] md:py-[40] py-0 mr-2">
                <p className="text-3xl mt-4"> {projectName}</p>
                <p className="mt-2 text-xl">{description}</p>
                {isMobile && (
                  <div className="flex flex-col justify-center pt-12 overflow-hidden mx-auto">
                    <SlideCarousel isMobile projectImages={projectImages} />
                  </div>
                )}
                {!isMobile && (
                  <div className="mt-[50px] mr-auto">
                    <CustomLinkBlock
                      isProject
                      projectLinkText={show}
                      projectLink={liveLink}
                      linkText="GitHub"
                      linkTo={gitHub}
                    />
                  </div>
                )}
              </div>
              <p className="text-[16px] flex">
                Frameworks:
                <span>
                  {frameworksList.map((frames, i) => (
                    <p className={`inline-flex ml-[4px]`} key={i}>
                      {frames} {i + 1 < frameworksList.length ? "," : "."}
                    </p>
                  ))}
                </span>
              </p>
              {isMobile && (
                <div className="mt-[50px] mx-auto w-fit flex">
                  <CustomLinkBlock
                    isProject
                    hrefText={show}
                    href={liveLink}
                    linkText="GitHub"
                    linkTo={gitHub}
                  />
                </div>
              )}
            </div>
          </FadeOnScroll>
        </div>
        {!isMobile && (
          <div className="flex flex-col my-auto gap-y-20 w-full relative">
            <div className="h-fit mb-[10px]">
              <FadeOnScroll
                data="fade"
                delay="400"
                duration="1000"
                offset="600"
              >
                {projectImages
                  .slice(0, numberOfProjectsImages)
                  .map((image, i) => (
                    <div
                      key={image.id}
                      className="flex h-full flex-col my-auto items-center justify-center"
                      style={{ height: "90vh" }}
                    >
                      <div className="w-full flex justify-center">
                        <TiltAnimation>
                          <div className="relative p-[20px] max-h-[600px] overflow-hidden w-fit ">
                            <img
                              className="rounded-xl h-full max-h-[550px] "
                              // width={800}
                              // height={200}
                              src={image.src}
                              alt={image.alt}
                            />
                            <div className="absolute h-full w-full top-0 left-0 right-0 bottom-0 bg-opacity-30 hover:bg-opacity-0 transition-all duration-700"></div>
                          </div>
                        </TiltAnimation>
                      </div>
                      {numberOfProjectsImages === i + 1 && !isMobile && (
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="bg-[#F5F5F5] rounded-full w-[28px] aspect-square flex items-center border-2 opacity-80 hover:opacity-100 transition-all duration-700 ml-auto mt-[0px] shadow-lg"
                        >
                          <FaPlus size={10} className="m-auto" color="black" />
                        </button>
                      )}
                    </div>
                  ))}
              </FadeOnScroll>
            </div>
          </div>
        )}
      </div>
      {!isMobile && (
        <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="mb-[12px]">
            <Subtitle variant="md" text={projectName} />
          </div>
          <SlideCarousel projectImages={projectImages} />
        </CustomModal>
      )}
    </div>
  );
};

ModuleProject.propTypes = {
  number: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
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
  frameworksList: PropTypes.array,
};

export default React.memo(ModuleProject);
