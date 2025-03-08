import PropTypes from 'prop-types';
import React from 'react';

import CustomLink from 'component/CustomLink/CustomLink';

import { GoArrowUpRight } from "react-icons/go";

import './CustomLinkBlock.css';


const CustomLinkBlock = ({ href, linkTo, hrefText, linkText  }) => {
  return (
    <div className="customlinkblock">
        <div className="bg-white bg-opacity-5 px-4 w-fit mx-auto rounded-full flex mb-12 gap-x-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fade ml-4 cursor-pointer px-6 py-1.5 rounded-full my-auto flex"
          >
            <p className="font-semibold text-lg">{hrefText}</p>
            <GoArrowUpRight size={20} className="my-auto" />
          </a>
          <CustomLink
            to={linkTo}
            linkText={linkText}
            customClasses="secondaryButton my-auto px-2 text-white hover:opacity-90 text-lg cursor-pointer"
          />
        </div>
    </div>
  );
};

CustomLinkBlock.propTypes = {
  href: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  hrefText: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};


export default CustomLinkBlock;
