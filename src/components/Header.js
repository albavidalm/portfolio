import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <h1 className="header__title">Alba</h1>
      <h1 className="header__title">Vidal</h1>
      <h2 className="header__profession">
        Front end developer<span className="header__profession--span">.</span>
      </h2>
    </header>
  );
};
export default Header;
