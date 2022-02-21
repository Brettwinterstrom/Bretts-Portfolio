import React from "react";
import "../Css/Card.css";

function Card() {
  return (
    <>
      <div className="card">
        <div className="card-image"></div>
        <div className="card-text">
          <span className="date">4 days ago</span>
          <h2>Post One</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis voluptatibus officiis pariatur. Impedit ullam
            voluptatem, vitae ducimus rem magnam animi.
          </p>
        </div>
        <div className="card-links"></div>
      </div>
    </>
  );
}

export default Card;
