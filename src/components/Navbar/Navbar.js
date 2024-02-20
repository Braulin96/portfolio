//Note: Hooks:
import { useState, useEffect } from "react";
//Note: Components:
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
//Note: Icons:
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const DesktopNavbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false); //state to control show or hide the Navbar
  const [prevScrollY, setPrevScrollY] = useState(0); //state to control the scrolling y position

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Determine the scrolling direction
    const isScrollingDown = currentScrollY > prevScrollY;

    // Check the scroll position and update hideNavbar accordingly
    if (currentScrollY > 100) {
      setHideNavbar(isScrollingDown);
    } else {
      setHideNavbar(false);
    }
    // Update the previous scroll position
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]); // Include prevScrollY in the dependency array

  //Styles to set the position for the current Navbar
  const hideDesktopNavbar = {
    width: "100%",
    transform: hideNavbar ? "translate(0px, -100px)" : "translate(0px, 0px)",
    transition: "transform 0.4s ease-in-out",
  };
  return (
    <div className="animate-fade-down animate-delay-[6s] animate-duration-[1s]">
      <div
        className="flex justify-between bg-secondary-blue pt-2"
        style={hideDesktopNavbar}
      >
        <div className="Nav flex text-gray-200 justify-end h-12 my-auto">
          <ul className="my-auto flex gap-x-14 mt-4 mr-4">
            <Link
              to="home"
              className="border-b-2 border-primary-green"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
            <Link to="aboutMe" spy={true} smooth={true} duration={1000}>
              About
            </Link>
            <Link to="projectList" spy={true} smooth={true} duration={1000}>
              Projects
            </Link>
            <Link to="skills" spy={true} smooth={true} duration={1000}>
              Skills
            </Link>
            <Link to="contact" spy={true} smooth={true} duration={1000}>
              Contact
            </Link>
          </ul>
        </div>
        <a
          href="https://github.com/Braulin96"
          target="_blank"
          rel="noopener noreferrer"
          className="slide ml-4 cursor-pointer px-6 py-1.5 rounded-full my-auto"
        >
          Git Hub
        </a>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  const [showNavIcon, setShowNavIcon] = useState(true); // to change the NavIcon to VerticalNav
  //to control the position of Navbar (hide or show using translate)
  const hideMobileNavbar = {
    width: "100%",
    transform: showNavIcon ? "translate(0px, -1000px)" : "translate(0px, 0px)",
    transition: "transform 0.8s ease-in-out",
  };

  return (
    <>
      <div
        className={`${
          showNavIcon ? "flex" : "hidden"
        } my-auto justify-end flex-col gap-y-4 h-12 mt-4 animate-delay-300 animate-once animate-fade-left mr-4`}
      >
        <button
          onClick={() => setShowNavIcon(false)}
          className="bg-primary-green flex w-fit ml-auto p-3 rounded-full my-auto transition-all duration-300 ease-in-out shadow-2xl"
        >
          <RxHamburgerMenu color="white" size={24} />
        </button>
      </div>
      <div
        style={hideMobileNavbar}
        className="flex flex-col bg-white text-xl fixed right-0 w-full sm:w-60 md:w-72 h-full z-50"
      >
        <button onClick={() => setShowNavIcon(true)}>
          <IoCloseSharp color="black" size={30} className="ml-auto mt-3 mr-3" />
        </button>
        <ul className="Nav my-auto flex flex-col gap-10 mx-auto text-center text-[#17181c]">
          <Link to="home" onClick={() => setShowNavIcon(true)}>
            <li className="border-b-2 border-primary-green mx-2">Home</li>
          </Link>
          <Link to="aboutMe" onClick={() => setShowNavIcon(true)}>
            <li className="mx-2">About</li>
          </Link>
          <Link to="projectList" onClick={() => setShowNavIcon(true)}>
            <li className="mx-2">Projects</li>
          </Link>
          <Link to="skills" onClick={() => setShowNavIcon(true)}>
            <li className="mx-2">Skills</li>
          </Link>
          <Link to="contact" onClick={() => setShowNavIcon(true)}>
            <li className="mx-2">Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect to update the window size
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="fixed flex w-full z-30 mx-auto">
      <div className="w-full flex max-w-7xl mx-auto">
        <div className="h-full flex flex-col ml-auto w-full px-4">
          {windowWidth <= 640 ? <MobileNavbar /> : <DesktopNavbar />}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
