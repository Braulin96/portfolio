//Note : Components
import Lottie from "lottie-react";
import FadeOnScroll from "./shared/FadeOnScroll";
//Note : Icons
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
//Note: Lottie
import Robot from "../assets/animation/robot.json";

const Contact = () => {
  return (
    <div id="contact" style={{ height: "100vh", maxHeight: "1000px" }}>
      <div className="max-w-7xl my-auto h-full flex md:flex-row flex-col items-center mx-auto">
        <div className="flex flex-col px-4 gap-y-12 w-full pt-20 items-center sm:items-start">
          <FadeOnScroll data="fade" duration="1000" delay="0">
            <p className="lg:text-8xl md:text-7xl text-6xl font-semibold text-primary-gray w-full">
              Contact
            </p>
          </FadeOnScroll>
          <div className="flex sm:gap-x-20 gap-x-10 sm:justify-center lg:ml-32 md:ml-24 sm:ml-12 ml-0">
            <FadeOnScroll data="fade" duration="1000" delay="500">
              <a
                href="mailto:braulinpires@hotmail.com"
                rel="noopener noreferrer"
                className="cursor-pointer rounded-full my-auto"
              >
                <IoIosMail
                  className="translate-y-0 hover:-translate-y-2 transition-all duration-500 ease-in-out"
                  size={50}
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
                  size={50}
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
                  size={50}
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
                  size={50}
                  color="#EEEEEE"
                />
              </a>
            </FadeOnScroll>
          </div>
        </div>
        <FadeOnScroll data="fade" duration="1600" delay="1500" offset="400">
          <div className="flex my-auto md:mr-12 bg-white  bg-opacity-10 rounded-full p-5 shadow-md md:mx-0 mx-4 md:mt-0 mt-8">
            <Lottie
              className="my-auto opacity-80"
              animationData={Robot}
              loop={true}
              style={{ maxWidth: "500px"}}
            />
          </div>
        </FadeOnScroll>
      </div>
    </div>
  );
};
export default Contact;
