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
//Note: Lottie
import Robot from "../assets/animation/robot.json";

const Contact = () => {
  return (
    <div id="contact" style={{ height: "100vh", maxHeight: "1000px" }}>
      <div className="max-w-7xl my-auto h-full flex md:flex-row flex-col items-center mx-auto relative">
        <div className="flex flex-col px-4 gap-y-8 w-full pt-20">
          <FadeOnScroll data="fade" duration="1000" delay="0">
            <p className="lg:text-7xl md:text-6xl text-5xl font-semibold text-primary-gray w-full">
              Braulin Pires
            </p>
          </FadeOnScroll>
          <div className="flex gap-x-20 md:flex-row flex-col gap-y-8">
            <p className="sm:text-xl text-lg md:w-1/2 w-full">
              I believe that we are what we feed, learn, read, and hear, so I am
              constantly seeking to learn what I do not know and improve what I
              do know, because it is important to know your abilities, but even
              more important is to know your limitations.
            </p>
            <div>
              <p className="text-3xl"> Say Hello,</p>
              <div className="flex sm:gap-x-16 gap-x-10 md:justify-center mt-6">
                <FadeOnScroll data="fade" duration="1000" delay="500">
                  <a
                    href="mailto:braulinpires@hotmail.com"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-full my-auto"
                  >
                    <IoIosMail
                      className="translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-in-out"
                      size={40}
                      color="#EEEEEE"
                    />
                  </a>
                </FadeOnScroll>
                <FadeOnScroll data="fade" duration="1000" delay="700">
                  <a
                    href="https://www.linkedin.com/in/braulin-pires-7a13b3145/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-full my-auto"
                  >
                    <FaLinkedinIn
                      className="translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-in-out"
                      size={40}
                      color="#EEEEEE"
                    />
                  </a>
                </FadeOnScroll>
                <FadeOnScroll data="fade" duration="1000" delay="900">
                  <a
                    href="https://www.instagram.com/brawlinpiress/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-full my-auto"
                  >
                    <AiFillInstagram
                      className="translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-in-out"
                      size={40}
                      color="#EEEEEE"
                    />
                  </a>
                </FadeOnScroll>
                <FadeOnScroll data="fade" duration="1000" delay="1200">
                  <a
                    href="https://github.com/Braulin96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-full my-auto"
                  >
                    <FaGithub
                      className="translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-in-out"
                      size={40}
                      color="#EEEEEE"
                    />
                  </a>
                </FadeOnScroll>
              </div>
            </div>
            <button
              onClick={() => scroll.scrollToTop()}
              className="ml-auto md:flex flex-col hidden"
            >
              <MdKeyboardDoubleArrowUp size={30} />
              <p
                style={{ writingMode: "vertical-rl" }}
                className="text-lg mx-auto mt-2"
              >
                Back On Top
              </p>
            </button>

            <button
              onClick={() => scroll.scrollToTop()}
              className="absolute bottom-6 right-4 ml-auto flex md:hidden"
            >
              <p
                //style={{ writingMode: "vertical-rl" }}
                className="text-lg mr-1"
              >
                Back On Top
              </p>
              <MdKeyboardDoubleArrowUp size={30} />
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
