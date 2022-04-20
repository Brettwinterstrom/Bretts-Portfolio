import React from "react";
import "../Css/Projects.css";
import Card from "./Card";
import crypto from "../imgs/Crypto-Tracker-img.PNG";
import personal from "../imgs/Personal-Site.PNG";
import notes from "../imgs/notes app.PNG";
import movies from "../imgs/movielist.PNG";

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
            name="Movie Watchlist"
            img={movies}
            description="This app uitilizes the tmdb api and uses react hooks and context api. The app allows you to search the tmdb api and add a movie to either a watchlist or a list of movies you've already watched and allows to move movies from list to list."
            github="https://github.com/Brettwinterstrom/Crypto-Tracker"
            live="https://moviezwatchlist.netlify.app/"
          />
          <Card
            name="Personal website"
            img={personal}
            description="This is the site you're currently on now. I'm proud of my personal website and I think it showcases my front end skills nicely. It's my favorite website I've made so far I hope you're enjoying it."
            github="https://github.com/Brettwinterstrom/Movie-app"
            live="https://brettwportfolio.netlify.app/"
          />
          <Card
            name="React Notes"
            img={notes}
            description="This site allows you to create notes that also persist to local storage. You're able to filter through the notes you have as well as delete notes and toggle between dark and light theme"
            github="https://github.com/Brettwinterstrom/My-notes"
            live="https://brettsnotes.netlify.app/"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;
