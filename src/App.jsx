import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Exp from "./components/Exp";
import ScrollToTop from "./components/ScrollToTop";
import Projects from "./components/Projects";
import Portfolio from "./components/Portfolio";
const App = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Header />
      <main>
        <Hero />
        <Exp />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
