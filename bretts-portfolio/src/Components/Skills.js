import React from "react";
import "../Css/Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaGit, FaNode } from "react-icons/fa";
import { DiJavascript1, DiMysql } from "react-icons/di";
function Skills() {
  return (
    <>
      <div className="wave1" id="skills">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <section className="skills-section">
        <h1 className="skill-header">02. Skills</h1>
        <p className="subtext">
          These are some technologies I know and have used recently
        </p>
        <ul>
          <li>
            <DiJavascript1 />
          </li>
          <li>
            <FaReact />
          </li>
          <li>
            <FaNode />
          </li>
          <li>
            <FaHtml5 />
          </li>
          <li>
            <FaCss3Alt />
          </li>
          <li>
            <FaGit />
          </li>
          <li>
            <DiMysql />
          </li>
        </ul>
      </section>
      <div className="wave2">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Skills;
