const NavLinks = () => {
  return (
    <ul className="nav-list">
      <li>
        <a className="nav-link" href="#about">
          <p className="number">01. </p> About Me
        </a>
      </li>
      <li>
        <a className="nav-link" href="#skills">
          <p className="number">02. </p> Skills
        </a>
      </li>
      <li>
        <a className="nav-link" href="#projects">
          <p className="number">03. </p> Projects
        </a>
      </li>
      <li>
        <a className="nav-link" href="#contact">
          <p className="number">04. </p> Contact Me
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
