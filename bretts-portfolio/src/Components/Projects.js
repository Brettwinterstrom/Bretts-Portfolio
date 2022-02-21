import React from "react";
import "../Css/Projects.css";
import Card from "./Card";

function Projects() {
  return (
    <>
      <div className="project-section" id="projects">
        <h1> 02. Projects</h1>
        <div className="card-section">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Projects;
