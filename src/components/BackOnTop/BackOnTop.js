import PropTypes from 'prop-types';
import { animateScroll as scroll } from "react-scroll";

import { HiOutlineArrowLongUp } from "react-icons/hi2";

import './BackOnTop.css';

const BackOnTop = ({ isMobile = false, iconSize, iconColor,  hoverColor = "#00CD8F" }) => {
  return (
    <>
      {!isMobile && (
        <button
          onClick={() => scroll.scrollToTop()}
          className="testing bg-white bg-opacity-5 ml-auto md:flex shrink-0 flex-col hidden rounded-full group p-0 py-[30px]"
        >
          <div className="my-auto translate-y-0">
            <HiOutlineArrowLongUp
              color={iconColor || "white"}
              className="group-hover:-translate-y-2 transition-all duration-700 ease-in-out"
              size={iconSize || 30}
              style={{
                "--hover-color": hoverColor
              }}
            />
            <p
              style={{ writingMode: "vertical-rl"}}
              className="text-[14px] mx-auto mt-2 text-secondary-gray transition-all"
            >
              Back On Top
            </p>
          </div>
        </button>
      )}

      {isMobile && (
        <button
          onClick={() => scroll.scrollToTop()}
          className="absolute bottom-4 right-4 ml-auto flex md:hidden"
        >
          <p
            className="text-[12px] mr-1 text-secondary-gray my-auto"
          >
            Back On Top
          </p>
          <HiOutlineArrowLongUp color='white' className="my-auto" size={iconSize || 15} />
        </button>
      )}
    </>
  );
};

BackOnTop.propTypes = {
  isMobile: PropTypes.bool,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  hoverColor: PropTypes.string
};

export default BackOnTop;