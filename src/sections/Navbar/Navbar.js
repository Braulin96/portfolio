import { useState, useEffect } from 'react';

import DesktopNavbar from 'components/DesktopNavbar/DesktopNavbar';
import MobileNavbar from 'components/MobileNavbar/MobileNavbar';

import { NAV_LINKS } from 'constants/navLinks';

import './Navbar.css';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky top-0 flex w-full z-30">
      <div className="w-full flex mx-auto">
        <div className="h-full flex flex-col ml-auto w-full">
          {windowWidth <= 640 ? <MobileNavbar navLinks={NAV_LINKS} /> : <DesktopNavbar navLinks={NAV_LINKS} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;