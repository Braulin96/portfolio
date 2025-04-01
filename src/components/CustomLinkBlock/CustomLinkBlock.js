import PropTypes from "prop-types";
import React from "react";

import CustomLink from "components/CustomLink/CustomLink";

import { GoArrowUpRight } from "react-icons/go";

import "./CustomLinkBlock.css";

const CustomLinkBlock = ({
  projectLink,
  linkTo,
  projectLinkText,
  linkText,
  isProject = false,
}) => {
  return (
    <div className="customlinkblock">
      <div className="bg-white bg-opacity-5 w-fit mx-auto rounded-full flex mb-12 gap-x-2">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="fade cursor-pointer px-[25px] py-[6px] rounded-full my-auto flex"
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
    </div>
  );
};

CustomLinkBlock.propTypes = {
  projectLink: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  projectLinkText: PropTypes.string.isRequired,
  isProject: PropTypes.bool,
  linkText: PropTypes.string.isRequired
};

export default CustomLinkBlock;
