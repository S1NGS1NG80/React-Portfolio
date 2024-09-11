import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import About from "./components/pages/about/About";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [currentSection, setCurrentSection] = useState("About");

  const renderSection = () => {
    switch (currentSection) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main>{renderSection()}</main>
      <Footer />
    </>
  );
};

export default App;
