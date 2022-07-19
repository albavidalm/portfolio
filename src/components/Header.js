import NavBar from "./NavBar";
import circle from "../assets/images/circle.svg";

const Header = () => {
  return (
    <header className="header">
      <NavBar />

      <div className="hero">
        <div className="hero__title--container">
          <h1 className="hero__title--name title">
            <span className="hero__title title">A</span>lba
          </h1>
          <h1 className="hero__title--lastName title">
            <span className="hero__title title">V</span>idal
          </h1>
        </div>
        <div className="hero__profession--line border__up"></div>
        <h2 className="hero__profession">
          Front end developer
          <img alt="hearbeat point" src={circle} className="hero__circle"></img>
        </h2>
        <div className="hero__profession--line border__down"></div>
      </div>
    </header>
  );
};
export default Header;
