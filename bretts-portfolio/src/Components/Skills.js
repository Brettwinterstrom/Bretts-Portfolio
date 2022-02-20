import React from "react";
import "../Css/Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaGit, FaNode } from "react-icons/fa";
import { DiJavascript1, DiMysql } from "react-icons/di";
function Skills() {
  return (
    <>
      <section className="skills-section" id="skills">
        <h1 className="skill-header">03. Skills</h1>
        <p>These are some technologies I've know and have used recently</p>
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
    </>
  );
}

export default Skills;
