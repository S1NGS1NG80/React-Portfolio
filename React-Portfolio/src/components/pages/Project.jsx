import React from "react";

const Project = ({ title, deployedLink, repoLink, icon }) => {
  return (
    <div className="project-card">
      <img src={icon} alt="project icon" className="project-icon" />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        Live Demo
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        GitHub Repo
      </a>
    </div>
  );
};

export default Project;
