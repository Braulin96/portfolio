import PropTypes from 'prop-types';

import AssetLink from "components/AssetLink/AssetLink";

import './Contact.css';

const Contact = ({ socialLinks }) => {
  return (
    <div id="contact">
      <div className="flex-col gap-[8px] grid grid-cols-2">
        {socialLinks.map((link) => (
          <AssetLink
            key={link.id}
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
      href: PropTypes.string,
      icon: PropTypes.elementType,
      isMailTo: PropTypes.bool
    })
  ).isRequired
};

export default Contact;