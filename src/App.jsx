import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

import { useState } from "react";
import ThemeContext from "./contexts/ThemeContext";

const App = () => {
  // themeToggle
  const [isDarkThemed, setIsDarkThemed] = useState(() => {
    const storedTheme = localStorage.getItem("dark-theme") === "true";

    storedTheme && document.documentElement.classList.add("dark");

    return storedTheme;
  });

  return (
    <>
      <ThemeContext value={{ isDarkThemed, setIsDarkThemed }}>
        <Header />
        <main>
          <Hero />
          <Exp />
          <Projects />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </ThemeContext>
    </>
  );
};

export default App;
