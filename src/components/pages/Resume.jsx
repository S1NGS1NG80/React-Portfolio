import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import Button from "react-bootstrap/Button";

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <Button href="https://green-bamby-96.tiiny.site" download>
        Download My Resume
      </Button>
      <br />
      <div className="skills">
        <h3>Skills</h3>
        <ListGroup as="ol" numbered>
          <ListGroup.Item as="li">JavaScript</ListGroup.Item>
          <ListGroup.Item as="li">React</ListGroup.Item>
          <ListGroup.Item as="li">Node.js</ListGroup.Item>
          <ListGroup.Item as="li">
            Perseverance and willingness to learn{" "}
          </ListGroup.Item>
        </ListGroup>
      </div>
    </section>
  );
}

export default Resume;
