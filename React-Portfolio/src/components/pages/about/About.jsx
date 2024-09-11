import React from "react";
import "../about/about.css";

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div className="jumbotron">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is my portfolio site where you can find more information about me
          and see some of my group projects.
        </p>
        <hr className="my-4" />
        <p>
          I enrolled in the UofT SCS Coding Boot Camp Online in April 2024 and
          completed the course in October 2024.
          <br></br>
          My work and life experience is quite varied; I have experience in
          customer service jobs such as a restaurant staff, to construction and
          landscaping work, to military service and overseas operations, as well
          as management and leadership roles.
        </p>
      </div>
    </section>
  );
};

export default About;
