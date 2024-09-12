import React from "react";
import "./about.css";
import profilePic from "../../../assets/images/Seanpic.png"

const About = () => {
  return (
    <section>
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
          landscaping work, to 17+ years of military service and overseas
          operations, as well as management and leadership roles. <br></br>
          Currently I am in the wellness industry where I lead yoga, Chi Kung
          and TRE (Tension Releasing Exercises) classes.
        </p>
        <img
          src={profilePic}
          alt="profile pic"
          className="about-image"
        />
      </div>
    </section>
  );
};

export default About;
