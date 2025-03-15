import PropTypes from 'prop-types';

import AssetLink from "component/AssetLink/AssetLink";

import './Contact.css';

const Contact = ({ socialLinks }) => {
  return (
    <div id="contact">
      <div className="flex-col gap-[8px] grid grid-cols-2">
        {socialLinks.map((link, index) => (
          <AssetLink
            key={index}
            href={link.href}
            icon={link.icon}
            isMailTo={link.isMailTo}
            iconColor="white"
            hoverColor="#00CD8F"
          />
        ))}
      </div>
    </div>
  );
};

Contact.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.elementType.isRequired,
      isMailTo: PropTypes.bool
    })
  ).isRequired
};

export default Contact;