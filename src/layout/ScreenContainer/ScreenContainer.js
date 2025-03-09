import PropTypes from "prop-types";

import "./ScreenContainer.css";

const ScreenContainer = ({ children, id }) => {
  return (
    <div
      id={id}
      style={{ height: "100vh", maxHeight: "1000px" }}
      className="screencontainer py-[150px]"
    >
      {children}
    </div>
  );
};

ScreenContainer.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string
};

export default ScreenContainer;
