import PropTypes from "prop-types";
import "./ScreenContainer.css";

const ScreenContainer = ({ 
  children, 
  id,
  isHeroSection = false, 
  customClasses, 
  backgroundImageOverlay, 
}) => {
  return (
    <div
      id={id}
      className={`screencontainer relative sm:h-screen sm:py-0 sm:px-[20px] px-[10px] ${customClasses} ${
        isHeroSection ? "h-[100vh]" : "h-[calc(100vh-20px)]"
      }`}
    >
      {backgroundImageOverlay && (
        <>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImageOverlay})` }}
        ></div>
        <div className={`absolute w-full top-0 z-10 left-0 bg-gradient-to-b via-secondary-blue from-secondary-blue to-bg-transparent ${isHeroSection ? "h-[200px]" : "h-[150px]" }`}></div>
        
        <div className={`absolute w-full bottom-0 z-10 left-0 bg-gradient-to-t via-transparent from-secondary-blue to-bg-transparent h-[120px]`}></div>

        <div className={`absolute h-full left-0 z-10 bg-gradient-to-r via-transparent from-secondary-blue to-bg-transparent w-[120px]`}></div>

        <div className={`absolute h-full right-0 z-10 bg-gradient-to-l via-transparent from-secondary-blue to-bg-transparent w-[120px]`}></div>
        </>
      )}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

ScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  isHeroSection: PropTypes.bool,
  customClasses: PropTypes.string,
  backgroundImageOverlay: PropTypes.string // Changed to string for image URL
};

export default ScreenContainer;