import React from "react";
import "../Css/Card.css";

function Card({ name, img, description, github, live }) {
  return (
    <>
      <div className="card">
        <img className="card-image" src={img}></img>

        <div className="card-text">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="card-links">
          <a href={github} target="_blank" className="link">
            Github Link
          </a>
          <a href={live} target="_blank" className="link">
            Live Site
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
