import React from "react";
import Social from "./Social";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  return (
    <>
      <div className="navList">
        <ul className="navLinks">
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

        {isMobile && <Social />}
      </div>
    </>
  );
};

export default NavLinks;
