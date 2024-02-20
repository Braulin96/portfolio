//Note : Components
import Lottie from "lottie-react";
import FadeOnScroll from "./shared/FadeOnScroll";
import { Link, animateScroll as scroll } from "react-scroll";
//Note : Icons
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { HiOutlineArrowLongUp } from "react-icons/hi2";

//Note: Lottie
import Robot from "../assets/animation/robot.json";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative text-secondary-blue bg-gradient-to-br from-secondary-gray via-secondary-gray to-[#00CD8F] pb-20 pt-10"
    >
      <div className="max-w-7xl my-auto h-full flex md:flex-row flex-col items-center mx-auto  ">
        <div className="flex flex-col px-4 gap-y-4 w-full pt-20">
          <FadeOnScroll data="fade" duration="1000" delay="0">
            <p className="lg:text-4xl md:text-3xl text-2xl text-primary-gray w-full">
              Braulin Pires
            </p>
          </FadeOnScroll>
          <div className="flex gap-x-20 md:flex-row flex-col gap-y-8 w-full">
            <div className="w-full">
              <FadeOnScroll data="fade" duration="1000" delay="200">
                <p className="sm:text-xl text-lg w-full">
                  I believe that we are what we feed, learn, read, and hear, so
                  I am constantly seeking to learn what I do not know and
                  improve what I do know, because it is important to know your
                  abilities, but even more important is to know your
                  limitations.
                </p>
              </FadeOnScroll>
              <FadeOnScroll data="fade" duration="1000" delay="400">
                <div className="flex my-auto bg-white bg-opacity-10 rounded-full shadow-md w-fit p-5 mt-6 mx-auto">
                  <Lottie
                    className="my-auto opacity-80"
                    animationData={Robot}
                    loop={true}
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              </FadeOnScroll>
            </div>

            <div className="w-full flex flex-col mt-4">
              <FadeOnScroll
                className="mx-auto"
                data="fade"
                duration="1000"
                delay="600"
              >
                <p className="sm:text-5xl text-4xl mx-auto mb-4">Say hello</p>
              </FadeOnScroll>

              <div className="flex sm:gap-x-16 gap-x-10 sm:mt-0 mt-4 mx-auto">
                <FadeOnScroll
                  className="mx-auto"
                  data="fade"
                  duration="1000"
                  delay="800"
                >
                  <div className="flex flex-col gap-y-4">
                    <a
                      href="mailto:braulinpires@hotmail.com"
                      rel="noopener noreferrer"
                      className="cursor-pointer rounded-full my-auto"
                    >
                      <IoIosMail
                        className="translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-in-out opacity-90"
                        size={70}
                        color="#17181c"
                      />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/braulin-pires-7a13b3145/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer rounded-full my-auto"
                    >
                      <FaLinkedinIn
                        className="translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-in-out opacity-90"
                        size={70}
                        color="#17181c"
                      />
                    </a>
                  </div>
                </FadeOnScroll>
                <FadeOnScroll
                  className="mx-auto"
                  data="fade"
                  duration="1000"
                  delay="1000"
                >
                  <div className="flex flex-col gap-y-4">
                    <a
                      href="https://www.instagram.com/brawlinpiress/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer rounded-full my-auto"
                    >
                      <AiFillInstagram
                        className="translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-in-out opacity-90"
                        size={70}
                        color="#17181c"
                      />
                    </a>

                    <a
                      href="https://github.com/Braulin96"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer rounded-full my-auto"
                    >
                      <FaGithub
                        className="translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-in-out opacity-90"
                        size={70}
                        color="#17181c"
                      />
                    </a>
                  </div>
                </FadeOnScroll>
              </div>
              <div className="sm:mt-auto mt-8 mx-auto">
                <FadeOnScroll
                  data="fade"
                  duration="1000"
                  delay="1200"
                  offset={10}
                >
                  <p className="text-sm mx-auto">
                    @2024 Braulin Pires. All rights reserved.
                  </p>
                </FadeOnScroll>
              </div>
            </div>
            <FadeOnScroll
              data="fade"
              duration="1000"
              delay="1400"
              //offset={10}
              
            >
              <button
                onClick={() => scroll.scrollToTop()}
                className="testing bg-secondary-blue bg-opacity-60 ml-auto md:flex flex-col hidden rounded-full group h-full p-0"
                //style={{minHeight:'100%'}}
                
              >
                <div className="my-auto translate-y-0">
                  <HiOutlineArrowLongUp
                    color="white"
                    className="  group-hover:-translate-y-2 transition-all duration-500 ease-in-out"
                    size={70}
                  />
                  <p
                    style={{ writingMode: "vertical-rl" }}
                    className="text-xl mx-auto mt-2 text-secondary-gray font-semibold"
                  >
                    Back On Top
                  </p>
                </div>
              </button>
            </FadeOnScroll>

            <button
              onClick={() => scroll.scrollToTop()}
              className="absolute bottom-4 right-4 ml-auto flex md:hidden"
            >
              <p
                //style={{ writingMode: "vertical-rl" }}
                className="text-sm mr-1 text-[#17181c] my-auto"
              >
                Back On Top
              </p>
              <HiOutlineArrowLongUp className="my-auto" size={15} />
            </button>
          </div>
        </div>
        {/* <FadeOnScroll data="fade" duration="1600" delay="1500" offset="400">
          <div className="flex my-auto md:mr-12 bg-white  bg-opacity-10 rounded-full p-5 shadow-md md:mx-0 mx-4 md:mt-0 mt-8">
            <Lottie
              className="my-auto opacity-80"
              animationData={Robot}
              loop={true}
              style={{ maxWidth: "400px" }}
            />
          </div>
        </FadeOnScroll> */}
      </div>
    </div>
  );
};
export default Contact;
