import React from "react";
import "../Css/Projects.css";
import Card from "./Card";
import crypto from "../imgs/Crypto-Tracker-img.PNG";
import personal from "../imgs/Personal-Site.PNG";

function Projects() {
  return (
    <>
      <div className="project-section" id="projects">
        <h1> 03. Projects</h1>
        <div className="card-section">
          <Card
            name="Crypto Tracker"
            img={crypto}
            description="This is a crypto tracking app using Coin Gecko API that allows you to search and view the most popular cryptocurrencies. This project uses React and Axios along with the API to gather the cryptocurrency data."
            github="https://github.com/Brettwinterstrom/Crypto-Tracker"
            live="https://trackmycryptos.netlify.app/"
          />
          <Card
            name="Personal website"
            img={personal}
            description="This is the site you're currently on now. I'm proud of my personal website and I think it showcases my front end skills nicely. It's my favorite website I've made so far I hope you're enjoying it."
            github="https://github.com/Brettwinterstrom/Bretts-Portfolio"
            live="https://brettwportfolio.netlify.app/"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
