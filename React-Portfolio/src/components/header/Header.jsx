import React from "react";
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
  
export default Header;
