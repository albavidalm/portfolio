import About from "./About";
import Header from "./Header";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
