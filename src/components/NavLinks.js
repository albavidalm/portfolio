import React from "react";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  return (
    <ul className="navList">
      <li
        className="navList__element"
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a className="navList__element--item" href="/#about">
          About me
        </a>
      </li>
      <li
        className="navList__element"
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a className="navList__element--item" href="/#projects">
          Projects
        </a>
      </li>
      <li
        className="navList__element"
        onClick={() => isMobile && closeMobileMenu()}
      >
        <a className="navList__element--item" href="/#contact">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
