import React from "react";
import PropTypes from "prop-types";

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

// Prop validation
Project.propTypes = {
  title: PropTypes.string.isRequired, // title must be a string and is required
  deployedLink: PropTypes.string.isRequired, // deployedLink must be a string and is required
  repoLink: PropTypes.string.isRequired, // repoLink must be a string and is required
  icon: PropTypes.string.isRequired, // icon must be a string (URL or file path) and is required
};

export default Project;
