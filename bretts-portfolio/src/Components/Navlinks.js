import logo from "../imgs/logo.png";
import resume from "../resume.pdf";
import "../Css/Navbar.css";

const NavLinks = (props) => {
  return (
    <nav className="navbar-container">
      <a>
        <img src={logo} className="navbar-logo" alt="logo" />
      </a>
      <ul className="nav-list">
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a className="nav-link" href="#about">
            <p className="number">01. </p> About Me
          </a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a className="nav-link" href="#skills">
            <p className="number">02. </p> Skills
          </a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a className="nav-link" href="#projects">
            <p className="number">03. </p> Projects
          </a>
        </li>
        <li onClick={() => props.isMobile && props.closeMobileMenu()}>
          <a className="nav-link" href="#contact">
            <p className="number">04. </p> Contact Me
          </a>
        </li>
      </ul>
      <a
        href={resume}
        download
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <button className="resume-btn">Resume</button>
      </a>
    </nav>
  );
};

export default NavLinks;
