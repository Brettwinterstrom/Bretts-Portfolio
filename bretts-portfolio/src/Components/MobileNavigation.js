import NavLinks from "./Navlinks";
import "../Css/Navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <AiOutlineMenu className="hamburger" onClick={() => setOpen(!open)} />
  );

  const closeIcon = (
    <AiOutlineClose className="hamburger" onClick={() => setOpen(!open)} />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <div className="navbar mobile-nav">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  );
};

export default MobileNavigation;
