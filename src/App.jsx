import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Career from "./components/Career";
import Test from "./components/Test";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Career />
        {/* <Experience /> */}
        <TechStack />
      </main>
      <Footer />
    </>
  );
};

export default App;
