import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Career from "./components/Career";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Career />
        <Portfolio />
        <TechStack />
      </main>
      <Footer />
    </>
  );
};

export default App;
