import LanguageButtons from "./LanguageButtons";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className="navigation">
      <NavLinks />
      <LanguageButtons />
    </nav>
  );
};

export default Navigation;
