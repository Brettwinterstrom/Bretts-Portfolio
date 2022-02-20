import React from "react";
import Stars from "../Video/Pexels Videos 2611250.mp4";
import "../Css/Hero.css";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <>
      <section className="hero">
        <video src={Stars} muted loop autoPlay></video>
        <div className="text">
          <p className="">Hi, my name is</p>
          <h1 className="">Brett Winterstrom</h1>
          <p>I'm a </p>
          <Typewriter
            className="typewriter"
            options={{
              strings: [
                "Web Developer",
                "Computer Programmer",
                "Coder",
                "Software Developer",
                "Cat Dad",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
