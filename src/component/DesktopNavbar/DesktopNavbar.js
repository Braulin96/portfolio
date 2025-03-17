import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import CustomLink from 'component/CustomLink/CustomLink';

import './DesktopNavbar.css';

const DesktopNavbar = ({ navLinks }) => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > prevScrollY;
    if (currentScrollY > 100) {
      setHideNavbar(isScrollingDown);
    } else {
      setHideNavbar(false);
    }
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const hideDesktopNavbar = {
    width: "100%",
    transform: hideNavbar ? "translate(0px, -100px)" : "translate(0px, 0px)",
    transition: "transform 0.4s ease-in-out",
  };

  return (
    <div className="animate-fade-down animate-delay-[6s] animate-duration-[1s">
      <div
        className="flex justify-between bg-secondary-blue py-[8px] px-[20px]"
        style={hideDesktopNavbar}
      >
        <div className="Nav flex text-gray-200 justify-end h-12 my-auto">
          <ul className="my-auto flex gap-x-14 mt-4 mr-4 ">
            {navLinks.map((link, index) => (
              <CustomLink
                key={index}
                to={link.to}
                linkText={link.linkText}
                variant="secondary"
              />
            ))}
          </ul>
        </div>
        <CustomLink 
          linkText="Git Hub" 
          variant="primary" 
          onClick={() => window.open("https://github.com/Braulin96", "_blank")}
        />
      </div>
    </div>
  );
};


DesktopNavbar.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      isActive: PropTypes.bool
    })
  )
};


export default DesktopNavbar;