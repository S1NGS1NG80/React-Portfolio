import React from "react";
import Project from "./Project";

import stockUpIcon from "../../../src/assets/images/stockup.png";
import travelIcon from "../../../src/assets/images/4travel.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1: Stock Up",
      deployedLink: "https://surpritam.github.io/stock-up/",
      repoLink: "https://github.com/S1NGS1NG80/stock-up.git",
      icon: stockUpIcon,
    },
    {
      title: "Project 2: 4Travel",
      deployedLink: "https://fourtravel.onrender.com",
      repoLink: "https://github.com/lukemaines/4Travel.git",
      icon: travelIcon,
    },
    { title: "Project 3", deployedLink: "#", repoLink: "#" },
    // Add more projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
