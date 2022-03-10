import "../Css/Navbar.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

function Navbar() {
  return (
    <>
      <Navigation />
      <MobileNavigation />
    </>
  );
}

export default Navbar;
