import { useMediaQuery } from "react-responsive";

import DesktopNavbar from 'components/DesktopNavbar/DesktopNavbar';
import MobileNavbar from 'components/MobileNavbar/MobileNavbar';

import { NAV_LINKS } from 'constants/navLinks';

import './Navbar.css';

const Navbar = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 650px)",
  });
  
  return (
    <div className="sticky top-0 flex w-full z-30">
      <div className="w-full flex mx-auto">
        <div className="h-full flex flex-col ml-auto w-full">
          {isMobile ? <MobileNavbar navLinks={NAV_LINKS} /> : <DesktopNavbar navLinks={NAV_LINKS} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;