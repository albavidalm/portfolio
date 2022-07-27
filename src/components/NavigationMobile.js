import NavLinks from "./NavLinks";
import hamburgericon from "../assets/images/hamburger_icon.svg";
import hamburgericonclose from "../assets/images/hamburger_icon_close.svg";
import { useState } from "react";

const NavigationMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const hamburgerIcon = (
    <img
      src={hamburgericon}
      alt="hamburger icon"
      className="hamburger"
      onClick={() => setOpenMenu(!openMenu)}
    />
  );
  const closeIcon = (
    <img
      src={hamburgericonclose}
      alt="hamburger icon"
      className="hamburgerClose"
      onClick={() => setOpenMenu(!openMenu)}
    />
  );

  const closeMobileMenu = () => setOpenMenu(false);

  return (
    <nav className="navigationMobile">
      {openMenu ? closeIcon : hamburgerIcon}
      {openMenu && (
        <>
          <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />
        </>
      )}
    </nav>
  );
};

export default NavigationMobile;
