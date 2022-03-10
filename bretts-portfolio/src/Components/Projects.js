import React from "react";
import "../Css/Projects.css";
import Card from "./Card";
import crypto from "../imgs/Crypto-Tracker-img.PNG";

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
            name="Crypto Tracker"
            description="This is a crypto tracking app that shows the up to date prices of all the most popular cryptos."
            github="https://github.com/Brettwinterstrom/Crypto-Tracker"
            live="https://trackmycryptos.netlify.app/"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
