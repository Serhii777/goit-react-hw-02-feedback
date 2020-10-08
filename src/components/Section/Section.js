import React from "react";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ title, children }) => {
  return (
    <div className="Section">
      <h1 className="Section-title">{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  props: PropTypes.exact({
    title: PropTypes.string.isRequired,
  }),
};

Section.defaultProps = {
  title: "",
};

export default Section;
