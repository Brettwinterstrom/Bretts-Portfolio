import React from "react";
import Stars from "../Video/Pexels Videos 2611250.mp4";
import "../Css/Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <video src={Stars} muted loop autoPlay></video>
        <div className="text">
          <p className="">Hi, my name is</p>
          <h1 className="">Brett Winterstrom</h1>
        </div>
      </section>
    </>
  );
}

export default Hero;
