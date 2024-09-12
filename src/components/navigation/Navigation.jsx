import React from 'react';
import PropTypes from "prop-types";

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = ["AboutMe", "Portfolio", "Contact", "Resume"];

  return (
    <nav>
      <ul id="navUL">
        {sections.map((section) => (
          <li key={section} id={section}>
            <button
              className={currentSection === section ? "active" : ""}
              onClick={() => setCurrentSection(section)}
            >
              {section.replace(/([A-Z])/g, " $1")}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  currentSection: PropTypes.string.isRequired, // currentSection must be a string and is required
  setCurrentSection: PropTypes.func.isRequired, // setCurrentSection must be a function and is required
};

export default Navigation;
