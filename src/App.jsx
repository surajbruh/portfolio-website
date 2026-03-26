import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

/*
1. attach the final resume
2. fix svg icons
3. update the data.json file with relevant information
*/

const App = () => {
  return (
    <>
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
