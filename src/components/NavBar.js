import Navigation from "./Navigation";
import NavigationMobile from "./NavigationMobile";

const NavBar = () => {
  return (
    <div className="navBar">
      <Navigation />
      <NavigationMobile />
    </div>
  );
};

export default NavBar;
