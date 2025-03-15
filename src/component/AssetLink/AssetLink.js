import PropTypes from 'prop-types';
import './AssetLink.css';

const AssetLink = ({ 
  href, 
  icon: Icon, 
  isMailTo = false, 
  iconColor = "white", 
  hoverColor = "#00CD8F"  // Your primary green color
}) => {
  return (
    <a
      href={href}
      target={isMailTo ? "_self" : "_blank"}
      rel="noopener noreferrer"
      className="cursor-pointer rounded-full my-auto asset-link-container"
    >
      <Icon
        className="transition-all duration-500 ease-in-out opacity-90 asset-link-icon"
        size={70}
        color={iconColor}
        style={{
          "--hover-color": hoverColor
        }}
      />
    </a>
  );
};

AssetLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  isMailTo: PropTypes.bool,
  iconColor: PropTypes.string,
  hoverColor: PropTypes.string
};

export default AssetLink;