// import React from "react";
import PropTypes from 'prop-types'; // Import prop-types for validation
import "./header.css";
import Navigation from "../navigation/Navigation";

const Header = ({ currentSection, setCurrentSection }) => {
    return (
      <header>
        <h1 className="header">SEAN K SINGER</h1>
        <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </header>
    );
  };
  
// Prop validation
Header.propTypes = {
  currentSection: PropTypes.string.isRequired, // currentSection must be a string and is required
  setCurrentSection: PropTypes.func.isRequired, // setCurrentSection must be a function and is required
};


export default Header;
