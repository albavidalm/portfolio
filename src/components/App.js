import About from "./About";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ButtonTop from "./ui/ButtonTop";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <About />
        <Projects />
        <Contact />
        <ButtonTop />
      </main>
      <Footer />
    </>
  );
};

export default App;
