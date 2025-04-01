import PropTypes from "prop-types";
import { useState } from "react";

import CustomLink from "components/CustomLink/CustomLink";
import Paragraph from "components/Paragraph/Paragraph";

import { GoArrowUpRight } from "react-icons/go";

import "./CustomLinkBlock.css";

const CustomLinkBlock = ({
  projectLink,
  linkTo,
  projectLinkText,
  linkText,
  isProject = false,
}) => {
  const [showNotLiveMessage, setShowNotLiveMessage] = useState(false);

  return (
    <div
      className={`customlinkblock w-fit mx-auto ${
        isProject ? "min-h-[100px]" : ""
      }`}
    >
      <div className="bg-white bg-opacity-5 w-fit mx-auto rounded-full flex gap-x-2">
        <a
          onMouseEnter={() => setShowNotLiveMessage(true)}
          onMouseLeave={() => setShowNotLiveMessage(false)}
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`fade px-[25px] py-[6px] rounded-full my-auto flex ${!projectLink ? "cursor-not-allowed opacity-20": "cursor-pointer"}`}
        >
          <p className="font-semibold text-lg">{projectLinkText}</p>
          <GoArrowUpRight size={20} className="my-auto" />
        </a>

        {isProject ? (
          <a
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer"
            className="secondaryButton my-auto mx-[25px] text-white hover:opacity-90 text-lg cursor-pointer"
          >
            {linkText}
          </a>
        ) : (
          <CustomLink
            to={linkTo}
            linkText={linkText}
            customClasses="secondaryButton my-auto mx-[25px] text-white hover:opacity-90 text-lg cursor-pointer"
          />
        )}
      </div>
      {!projectLink && isProject && (
        <div
          className={`transition-opacity duration-700 ease-in-out ${
            showNotLiveMessage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Paragraph
            variant="secondary"
            text="Live page currently unavailable."
            customClasses="text-white mt-[12px]"
          />
        </div>
      )}
    </div>
  );
};

CustomLinkBlock.propTypes = {
  projectLink: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  projectLinkText: PropTypes.string.isRequired,
  isProject: PropTypes.bool,
  linkText: PropTypes.string.isRequired,
};

export default CustomLinkBlock;
