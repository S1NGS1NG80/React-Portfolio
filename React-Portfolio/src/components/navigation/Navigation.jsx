import React from 'react';

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = ['AboutMe', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <button
              className={currentSection === section ? 'active' : ''}
              onClick={() => setCurrentSection(section)}
            >
              {section.replace(/([A-Z])/g, ' $1')}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;