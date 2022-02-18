import React from "react";
import "../Css/Navbar.css";
import logo from "../imgs/logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="index.html">
            <img src={logo} className="navbar-logo" alt="logo" />
          </a>
          <ul className="nav-list">
            <li>
              <a className="nav-link" href="#about">
                <p className="number">01. </p> About Me
              </a>
            </li>
            <li>
              <a className="nav-link" href="#projects">
                <p className="number">02. </p> Projects
              </a>
            </li>
            <li>
              <a className="nav-link" href="#skills">
                <p className="number">03. </p> Skills
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                <p className="number">04. </p> Contact Me
              </a>
            </li>
          </ul>
          <button className="resume-btn">Resume</button>
          <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
              <div></div>
            </div>
            <div className="menu">
              <div>
                <div>
                  <ul>
                    <li>
                      <a href="#">01. About Me</a>
                    </li>
                    <li>
                      <a href="#">02. Projects</a>
                    </li>
                    <li>
                      <a href="#">03. Skills</a>
                    </li>
                    <li>
                      <a href="#">04. Contact Me</a>
                    </li>
                    <button className="resume-hamburger-btn">Resume</button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
