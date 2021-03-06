import React from "react";
import "../Css/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronCircleUp,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer id="contact">
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="footer-text">
          <h2>04. Contact Me</h2>
          <a className="email" href="mailto:brettwinterstrom@gmail.com">
            Email: brettwinterstrom@gmail.com
          </a>
          <ul className="social-links">
            <li className="social-link">
              <a
                className="social-link"
                href="https://github.com/Brettwinterstrom"
                target="_blank"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-link">
              <a
                className="social-link"
                href="https://www.linkedin.com/in/brettwinterstrom/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="social-link">
              <a
                className="social-link"
                href="mailto:brettwinterstrom@gmail.com"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
          <a href="#top" className="to-top-btn">
            <FaChevronCircleUp />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
