import React from "react";
import "../Css/Card.css";

function Card() {
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <div className="card-text">
          <h2>Post One</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis voluptatibus officiis pariatur. Impedit ullam
            voluptatem, vitae ducimus rem magnam animi.
          </p>
        </div>
        <div className="card-links">
          <a href="" className="link">
            Github Link
          </a>
          <a href="" className="link">
            Live Site
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
