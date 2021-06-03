import React from "react";
import NavBarLink from "./NavBarLink";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavBarLink name="About Me" />
      <NavBarLink name="My Projects" />
      <NavBarLink name="Languages" />
      <NavBarLink name="Contact Me" />
    </div>
  );
};
export default NavBar;
