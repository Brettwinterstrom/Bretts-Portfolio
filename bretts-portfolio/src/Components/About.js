import React from "react";
import "../Css/About.css";
import brett from "../imgs/brett.jpeg";

function About() {
  return (
    <>
      <div className="about-me" id="about">
        <h1> 01. About Me</h1>
        <img
          src={brett}
          className="photo"
          alt="A picture of Brett Winterstrom sitting at a bench"
        />
        <p>
          Hello! My name is Brett and I'm a web developer who enjoys creating
          clean and beautiful websites. I've been developing for about a year at
          this point and started my journey into programming at UCSD's Full
          Stack extension program. That program gave me the skills and
          confidence to transform my ideas into real websites for the world to
          see. When it comes to web development in general I enjoy the designing
          aspect a lot and am always going to continue learning new things to
          better improve the look and feel of the websites I make. I think I'll
          always have a passion for making websites and maybe even try to make a
          video game in the future.
          <br />
          <br />
          Besides writing code I enjoy traveling, spending time with my
          girlfriend and cats, and have recently gotten into pixel art.
        </p>
      </div>
    </>
  );
}

export default About;
