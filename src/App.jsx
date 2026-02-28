import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default App;
