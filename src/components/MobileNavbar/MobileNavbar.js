import PropTypes from "prop-types";
import { useState } from "react";

import CustomLink from "components/CustomLink/CustomLink";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

import "./MobileNavbar.css";

const MobileNavbar = ({ navLinks }) => {
  const [showNavIcon, setShowNavIcon] = useState(true);

  const handleLinkClick = () => setShowNavIcon(true);
  const handleClose = () => setShowNavIcon(false);

  const hideMobileNavbar = {
    width: "100%",
    transform: showNavIcon ? "translate(1000px, 0px)" : "translate(0px, 0px)",
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
          onClick={handleClose}
          className="bg-primary-green flex w-fit ml-auto p-3 rounded-full my-auto transition-all duration-300 ease-in-out shadow-2xl"
        >
          <RxHamburgerMenu color="black" size={24} />
        </button>
      </div>
      <div
        style={hideMobileNavbar}
        className="flex flex-col bg-[#17181c] text-xl fixed right-0 w-full sm:w-60 md:w-72 h-full z-50"
      >
        <button onClick={handleLinkClick} className="p-1">
          <IoCloseSharp color="white" size={24} className="ml-auto mt-3 mr-3" />
        </button>
        <ul className="Nav my-auto flex flex-col gap-10 mx-auto text-center">
          {navLinks.map((link, index) => (
            <div key={index} className="mobile-nav-item">
              <CustomLink
                customClasses="text-white"
                to={link.to}
                linkText={link.linkText}
                variant="secondary"
                onClick={handleLinkClick}
              />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

MobileNavbar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      isActive: PropTypes.bool,
    })
  ),
};

export default MobileNavbar;
